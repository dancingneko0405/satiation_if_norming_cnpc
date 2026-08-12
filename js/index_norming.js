///Don't touch lines 2-43.
var order = 1; 

/// Helper function that shuffles an array. Don't touch.
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

///Helper functions to get random selection from array, and to remove elements from array. Don't touch.
function getRandomNonDuplicateSelection(arr, count, exclusionArr) {
  var selected = [];
  var available = arr.filter(item => !exclusionArr.includes(item));

  if (available.length < count) {
    throw new Error('Insufficient unique elements available for selection.');
  }

  for (var i = 0; i < count; i++) {
    var randomIndex = Math.floor(Math.random() * available.length);
    selected.push(available[randomIndex]);
    available.splice(randomIndex, 1);
  }
  return selected;
}

function removeFromArray(arr, elements) {
  for (var i = 0; i < elements.length; i++) {
    var index = arr.indexOf(elements[i]);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// This section builds the norming trial list.                                                                                                                                   ////////
//////// Each participant sees one condition per lexicalization: 24 criticals total (12 island, 12 non-island).                                                                        ////////
//////// Lists A and B are complementary, therefore every lexicalization appears equally often in island/non-island across balanced participant groups.(??)                            ////////
//////// Critical structures strictly alternate I-N-I-N... or N-I-N-I..., with one good and one bad filler after every critical.                                                       ////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ALL = window.all_stimuli;

// ============================================================
// 1. DETERMINE COUNTERBALANCING LIST
// ============================================================

// For exact counterbalancing, launch participants with:
// ?list=A
// or
// ?list=B

function getNormingList() {
  const params = new URLSearchParams(window.location.search);
  const requestedList = String(params.get("list") || "").toUpperCase();

  if (requestedList === "A" || requestedList === "B") {
    return requestedList;
  }

  // For local testing only: default to List A
  if (window.location.protocol === "file:") {
    console.warn("No norming list specified. Local test defaults to List A.");
    return "A";
  }

  // For the real online experiment, require explicit counterbalancing
  throw new Error(
    "No valid norming list specified. Launch the experiment with ?list=A or ?list=B."
  );
}

const NORMING_LIST = getNormingList();
window.norming_list = NORMING_LIST;


// ============================================================
// 2. COLLECT STIMULUS POOLS
// ============================================================

const CRITICALS = ALL.filter(
  x => x.item_type === "acceptability" &&
       x.lexicalization != null &&
       (x.structure === "island" || x.structure === "nonisland")
);

const GOOD_FILLERS = ALL.filter(
  x => x.item_type === "filler_good"
);

const BAD_FILLERS = ALL.filter(
  x => x.item_type === "filler_bad"
);


// Basic stimulus checks
if (CRITICALS.length !== 48) {
  throw new Error(
    "Expected 48 critical stimuli, but found " + CRITICALS.length + "."
  );
}

if (GOOD_FILLERS.length !== 24) {
  throw new Error(
    "Expected 24 good fillers, but found " + GOOD_FILLERS.length + "."
  );
}

if (BAD_FILLERS.length !== 24) {
  throw new Error(
    "Expected 24 bad fillers, but found " + BAD_FILLERS.length + "."
  );
}


// ============================================================
// 3. SELECT ONE CONDITION PER LEXICALIZATION
// ============================================================

// List A:
// odd lexicalizations  -> island
// even lexicalizations -> non-island
//
// List B:
// odd lexicalizations  -> non-island
// even lexicalizations -> island
//
// Therefore A and B are exact complements.

function conditionForLex(lex, list) {

  const oddLex = (lex % 2 === 1);

  if (list === "A") {
    return oddLex ? "island" : "nonisland";
  } else {
    return oddLex ? "nonisland" : "island";
  }
}


// Pick the correct stimulus for each of the 24 lexicalizations
const selected_criticals = [];

for (let lex = 1; lex <= 24; lex++) {

  const targetStructure = conditionForLex(lex, NORMING_LIST);

  const item = CRITICALS.find(
    x => x.lexicalization === lex &&
         x.structure === targetStructure
  );

  if (!item) {
    throw new Error(
      "Missing critical stimulus for lexicalization " +
      lex +
      ", structure " +
      targetStructure +
      "."
    );
  }

  selected_criticals.push(item);
}


// ============================================================
// 4. BUILD ALTERNATING CRITICAL ORDER
// ============================================================

// Separate the 12 island and 12 non-island criticals
const island_criticals = shuffle(
  selected_criticals.filter(x => x.structure === "island").slice()
);

const nonisland_criticals = shuffle(
  selected_criticals.filter(x => x.structure === "nonisland").slice()
);

if (island_criticals.length !== 12 || nonisland_criticals.length !== 12) {
  throw new Error(
    "Each participant should receive exactly 12 island and 12 non-island criticals."
  );
}


// Randomize whether the critical sequence begins with island or non-island
const startWithIsland = Math.random() < 0.5;

const critical_order = [];

for (let i = 0; i < 12; i++) {

  if (startWithIsland) {
    critical_order.push(island_criticals[i]);
    critical_order.push(nonisland_criticals[i]);
  } else {
    critical_order.push(nonisland_criticals[i]);
    critical_order.push(island_criticals[i]);
  }
}


// ============================================================
// 5. RANDOMIZE FILLERS
// ============================================================

const good_fillers = shuffle(GOOD_FILLERS.slice());
const bad_fillers  = shuffle(BAD_FILLERS.slice());


// ============================================================
// 6. BUILD FINAL MAIN ORDER
// ============================================================

// Pattern:
// Critical
// Good + Bad fillers in random order
// Critical
// Good + Bad fillers in random order
// ...
//
// Critical structures remain strictly alternating.
// Every participant sees all 24 good and all 24 bad fillers.
//
// Total:
// 24 critical + 24 good + 24 bad = 72 trials.

const main_order = [];

for (let i = 0; i < critical_order.length; i++) {

  // Add critical
  main_order.push(critical_order[i]);

  // Pair one good and one bad filler?
  const filler_pair = [
    good_fillers[i],
    bad_fillers[i]
  ];

  // Randomize G-B vs B-G
  shuffle(filler_pair);

  main_order.push(...filler_pair);
}

window.main_order = main_order;


// Final sanity checks
if (main_order.length !== 72) {
  throw new Error(
    "Expected 72 main trials, but generated " + main_order.length + "."
  );
}


// Verify that critical structures strictly alternate
const critical_check = main_order.filter(
  x => x.item_type === "acceptability"
);

for (let i = 1; i < critical_check.length; i++) {
  if (critical_check[i].structure === critical_check[i - 1].structure) {
    throw new Error(
      "Critical alternation failed at critical positions " +
      i +
      " and " +
      (i + 1) +
      "."
    );
  }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// This section contains all slide types used by the experiment.                                                                                                                       ////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function make_slides(f) {

  var slides = {};  


  // ============================================================
  // INTRO / CONSENT
  // ============================================================

  slides.i0 = slide({
    name : "i0",
    start: function() {
      exp.startT = Date.now();
    }
  });


  slides.consent = slide({
    name: "consent",
    button: function() {
      exp.go();
    }
  });


  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go();
    }
  });


  // ============================================================
  // OPTIONAL SINGLE-TEXT TRIAL
  // ============================================================

  slides.single_trial = slide({
    name: "single_trial",

    start: function() {
      $(".err").hide();
      $(".display_condition").html("You are in " + exp.condition + ".");
    },

    button : function() {

      response = $("#text_response").val();

      if (response.length == 0) {

        $(".err").show();

      } else {

        exp.data_trials.push({
          "trial_type" : "single_trial",
          "response" : response
        });

        exp.go();
      }
    },
  });


  // ============================================================
  // GOOD PRACTICE
  // ============================================================

  slides.practice_slider = slide({

    name : "practice_slider",

    present : [{"a": 1}],

    present_handle : function(stim) {

      $(".err").hide();
      $(".errgood").hide();

      this.stim = stim;

      // Declarative practice sentence
      $(".prompt").html(
        "The chef cooked dinner for the guests."
      );

      this.init_sliders();

      exp.sliderPost = null;
      exp.first_response_wrong = 0;
      exp.first_response_value = null;
      exp.attempts = 0;
    },

    button : function() {

      if (exp.sliderPost == null) {

        $(".err").show();

      } else if (exp.sliderPost < 0.5) {

        exp.first_response_wrong = 1;
        exp.first_response_value = exp.sliderPost;
        exp.attempts = exp.attempts + 1;

        $(".errgood").show();

      } else {

        this.log_responses();
        _stream.apply(this);
      }
    },

    init_sliders : function() {

      utils.make_slider(
        "#practice_slider_1",
        function(event, ui) {
          exp.sliderPost = ui.value;
        }
      );
    },

    log_responses : function() {

      exp.data_trials.push({

        "response" : exp.sliderPost,
        "first_response_value": exp.first_response_value,
        "wrong_attempts": exp.attempts,

        "sentence": "The chef cooked dinner for the guests.",

        "item_type" : "practice_good",
        "item_number": "practice_good",
        "trial_sequence_total": 0
      });
    }
  });


  slides.post_practice_1 = slide({

    name : "post_practice_1",

    button : function() {
      exp.go();
    }
  });


  // ============================================================
  // BAD PRACTICE
  // ============================================================

  slides.practice_slider_bad = slide({

    name : "practice_slider_bad",

    present : [1],

    present_handle : function(stim) {

      $(".err").hide();
      $(".errbad").hide();

      this.stim = stim;

      // Declarative but clearly unacceptable practice sentence
      $(".prompt").html(
        "The chef for dinner the guests cooked did."
      );

      this.init_sliders();

      exp.sliderPost = null;
      exp.first_response_wrong = 0;
      exp.first_response_value = null;
      exp.attempts = 0;
    },

    button : function() {

      if (exp.sliderPost == null) {

        $(".err").show();

      } else if (exp.sliderPost > 0.5) {

        exp.first_response_wrong = 1;
        exp.first_response_value = exp.sliderPost;
        exp.attempts = exp.attempts + 1;

        $(".errbad").show();

      } else {

        this.log_responses();
        _stream.apply(this);
      }
    },

    init_sliders : function() {

      utils.make_slider(
        "#practice_slider_2",
        function(event, ui) {
          exp.sliderPost = ui.value;
        }
      );
    },

    log_responses : function() {

      exp.data_trials.push({

        "response" : exp.sliderPost,
        "first_response_value": exp.first_response_value,
        "wrong_attempts": exp.attempts,

        "sentence": "The chef for dinner the guests cooked did.",

        "item_type" : "practice_bad",
        "item_number": "practice_bad",
        "trial_sequence_total": 0
      });
    }
  });


  slides.post_practice_2 = slide({

    name : "post_practice_2",

    button : function() {
      exp.go();
    }
  });

  slides.last_reminder = slide({
  name : "last_reminder",

  button : function() {
    exp.go();
  }
});

  // ============================================================
  // MAIN ACCEPTABILITY TASK
  // ============================================================

  slides.one_slider = slide({

    name : "one_slider",

    present : main_order,

    present_handle : function(stim) {
      $(".err").hide();
      this.stim = stim;
      $(".target").html(stim.sentence);
      this.init_sliders();
      exp.sliderPost = null;
      update_progress();
    },

    button : function() {
      if (exp.sliderPost == null) {
        $(".err").show();
      } else {
        this.log_responses();
        exp.trial_index++;
        _stream.apply(this);
      }
    },

    init_sliders : function() {

      utils.make_slider(
        "#single_slider",
        function(event, ui) {
          exp.sliderPost = ui.value;
        }
      );
    },

    log_responses : function() {

      exp.data_trials.push({

        trial_type     : "acceptability",
        order          : order++,

        response       : exp.sliderPost,

        norming_list   : NORMING_LIST,

        lexicalization : this.stim.lexicalization || null,

        sentence       : this.stim.sentence,

        structure      : this.stim.structure || null,

        item_type      : this.stim.item_type,

        sentence_id    : this.stim.unique_id
      });

      console.log(
        "[DATA] MAIN",
        exp.data_trials[exp.data_trials.length - 1]
      );
    }
  });


  // ============================================================
  // SUBJECT INFORMATION
  // ============================================================

  slides.subj_info = slide({

    name : "subj_info",

    submit : function(e){

      exp.subj_data = {

        asses : $('input[name="assess"]:checked').val(),

        age : $("#age").val(),

        gender : $("#gender").val(),

        education : $("#education").val(),

        comments : $("#comments").val(),

        fairprice: $("#fairprice").val(),

        norming_list: NORMING_LIST
      };

      exp.go();
    }
  });


  // ============================================================
  // THANK-YOU / SUBMISSION
  // ============================================================

  slides.thanks = slide({

    name : "thanks",

    start : function() {

      exp.data = {

        "trials" : exp.data_trials,

        "catch_trials" : exp.catch_trials,

        "system" : exp.system,

        "subject_information" : exp.subj_data,

        "norming_list" : NORMING_LIST,

        "time_in_minutes" : (Date.now() - exp.startT) / 60000
      };

      proliferate.submit(exp.data);
    }
  });


  return slides;
}



// ============================================================
// PROGRESS BAR
// ============================================================


function update_progress() {
  if (!exp.total_trials) return;
  var pct = (exp.trial_index / exp.total_trials) * 100;
  $(".trial-progress .bar").css("width", pct + "%");
}

// ============================================================
// INIT
// ============================================================

function init() {

  exp.trials = [];

  exp.catch_trials = [];


  exp.condition = NORMING_LIST;


  exp.system = {

    Browser : BrowserDetect.browser,

    OS : BrowserDetect.OS,

    screenH: screen.height,

    screenUH: exp.height,

    screenW: screen.width,

    screenUW: exp.width
  };


  // Main experiment = 72 acceptability trials
  exp.total_trials = main_order.length;

  exp.trial_index = 0;


  // Experiment structure
  exp.structure = [
    "i0",
    "consent",
    "instructions",
    "practice_slider",
    "post_practice_1",
    "practice_slider_bad",
    "post_practice_2",
    "last_reminder",
    "one_slider",
    "subj_info",
    "thanks"
  ];


  exp.data_trials = [];


  exp.slides = make_slides(exp);


  $('.slide').hide();


  $("#start_button").click(function() {
    exp.go();
  });


  exp.go();
}