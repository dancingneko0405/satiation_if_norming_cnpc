// CNPC Norming Study Stimuli
// 24 lexicalizations × 2 structure conditions = 48 critical items
// + 24 good fillers + 24 bad fillers
// Total = 96 stimuli

const all_stimuli = [

  // ============================================================
  // CRITICAL ITEMS
  // ============================================================

  // Lexicalization 1
  {
    "lexicalization": 1,
    "structure": "island",
    "sentence": "John discussed the claim that the bakery shop would serve donuts tomorrow.",
    "unique_id": 1011,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 1,
    "structure": "nonisland",
    "sentence": "John claimed that the bakery shop would serve donuts tomorrow.",
    "unique_id": 1012,
    "item_type": "acceptability"
  },

  // Lexicalization 2
  {
    "lexicalization": 2,
    "structure": "island",
    "sentence": "Katie discussed the claim that the cat knocked over the vase.",
    "unique_id": 1021,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 2,
    "structure": "nonisland",
    "sentence": "Katie claimed that the cat knocked over the vase.",
    "unique_id": 1022,
    "item_type": "acceptability"
  },

  // Lexicalization 3
  {
    "lexicalization": 3,
    "structure": "island",
    "sentence": "David discussed the claim that the airline canceled the morning flight to Chicago.",
    "unique_id": 1031,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 3,
    "structure": "nonisland",
    "sentence": "David claimed that the airline canceled the morning flight to Chicago.",
    "unique_id": 1032,
    "item_type": "acceptability"
  },

  // Lexicalization 4
  {
    "lexicalization": 4,
    "structure": "island",
    "sentence": "Michael discussed the claim that the mechanic fixed the car after the accident.",
    "unique_id": 1041,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 4,
    "structure": "nonisland",
    "sentence": "Michael claimed that the mechanic fixed the car after the accident.",
    "unique_id": 1042,
    "item_type": "acceptability"
  },

  // Lexicalization 5
  {
    "lexicalization": 5,
    "structure": "island",
    "sentence": "Emma discussed the claim that the neighbor played loud music after midnight.",
    "unique_id": 1051,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 5,
    "structure": "nonisland",
    "sentence": "Emma claimed that the neighbor played loud music after midnight.",
    "unique_id": 1052,
    "item_type": "acceptability"
  },

  // Lexicalization 6
  {
    "lexicalization": 6,
    "structure": "island",
    "sentence": "Julia discussed the claim that the babysitter forgot to pick up the children after school.",
    "unique_id": 1061,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 6,
    "structure": "nonisland",
    "sentence": "Julia claimed that the babysitter forgot to pick up the children after school.",
    "unique_id": 1062,
    "item_type": "acceptability"
  },

  // Lexicalization 7
  {
    "lexicalization": 7,
    "structure": "island",
    "sentence": "Nora discussed the claim that the scientist discovered an error in the final experiment.",
    "unique_id": 1071,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 7,
    "structure": "nonisland",
    "sentence": "Nora claimed that the scientist discovered an error in the final experiment.",
    "unique_id": 1072,
    "item_type": "acceptability"
  },

  // Lexicalization 8
  {
    "lexicalization": 8,
    "structure": "island",
    "sentence": "Liam discussed the claim that the bus driver skipped several stops during the morning route.",
    "unique_id": 1081,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 8,
    "structure": "nonisland",
    "sentence": "Liam claimed that the bus driver skipped several stops during the morning route.",
    "unique_id": 1082,
    "item_type": "acceptability"
  },

  // Lexicalization 9
  {
    "lexicalization": 9,
    "structure": "island",
    "sentence": "Grace discussed the claim that the nurse gave the wrong medication to a patient.",
    "unique_id": 1091,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 9,
    "structure": "nonisland",
    "sentence": "Grace claimed that the nurse gave the wrong medication to a patient.",
    "unique_id": 1092,
    "item_type": "acceptability"
  },

  // Lexicalization 10
  {
    "lexicalization": 10,
    "structure": "island",
    "sentence": "The curator discussed the claim that the museum restored the painting.",
    "unique_id": 1101,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 10,
    "structure": "nonisland",
    "sentence": "The curator claimed that the museum restored the painting.",
    "unique_id": 1102,
    "item_type": "acceptability"
  },

  // Lexicalization 11
  {
    "lexicalization": 11,
    "structure": "island",
    "sentence": "Amy discussed the claim that the gardener planted flowers near the fence.",
    "unique_id": 1111,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 11,
    "structure": "nonisland",
    "sentence": "Amy claimed that the gardener planted flowers near the fence.",
    "unique_id": 1112,
    "item_type": "acceptability"
  },

  // Lexicalization 12
  {
    "lexicalization": 12,
    "structure": "island",
    "sentence": "The manager discussed the claim that the café overcharged the customer for coffee.",
    "unique_id": 1121,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 12,
    "structure": "nonisland",
    "sentence": "The manager claimed that the café overcharged the customer for coffee.",
    "unique_id": 1122,
    "item_type": "acceptability"
  },

  // Lexicalization 13
  {
    "lexicalization": 13,
    "structure": "island",
    "sentence": "Laura discussed the claim that the reporter misquoted the politician in the article.",
    "unique_id": 1131,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 13,
    "structure": "nonisland",
    "sentence": "Laura claimed that the reporter misquoted the politician in the article.",
    "unique_id": 1132,
    "item_type": "acceptability"
  },

  // Lexicalization 14
  {
    "lexicalization": 14,
    "structure": "island",
    "sentence": "Kevin discussed the claim that the chef added too much salt to the soup by mistake.",
    "unique_id": 1141,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 14,
    "structure": "nonisland",
    "sentence": "Kevin claimed that the chef added too much salt to the soup by mistake.",
    "unique_id": 1142,
    "item_type": "acceptability"
  },

  // Lexicalization 15
  {
    "lexicalization": 15,
    "structure": "island",
    "sentence": "Rachel discussed the claim that the photographer lost the camera during the trip.",
    "unique_id": 1151,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 15,
    "structure": "nonisland",
    "sentence": "Rachel claimed that the photographer lost the camera during the trip.",
    "unique_id": 1152,
    "item_type": "acceptability"
  },

  // Lexicalization 16
  {
    "lexicalization": 16,
    "structure": "island",
    "sentence": "Thomas discussed the claim that the author deleted a chapter from the final draft.",
    "unique_id": 1161,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 16,
    "structure": "nonisland",
    "sentence": "Thomas claimed that the author deleted a chapter from the final draft.",
    "unique_id": 1162,
    "item_type": "acceptability"
  },

  // Lexicalization 17
  {
    "lexicalization": 17,
    "structure": "island",
    "sentence": "Olivia discussed the claim that the secretary sent the report to the wrong department.",
    "unique_id": 1171,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 17,
    "structure": "nonisland",
    "sentence": "Olivia claimed that the secretary sent the report to the wrong department.",
    "unique_id": 1172,
    "item_type": "acceptability"
  },

  // Lexicalization 18
  {
    "lexicalization": 18,
    "structure": "island",
    "sentence": "Ben discussed the claim that the delivery driver dropped the package on the street.",
    "unique_id": 1181,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 18,
    "structure": "nonisland",
    "sentence": "Ben claimed that the delivery driver dropped the package on the street.",
    "unique_id": 1182,
    "item_type": "acceptability"
  },

  // Lexicalization 19
  {
    "lexicalization": 19,
    "structure": "island",
    "sentence": "Megan discussed the claim that the company released the new software ahead of schedule.",
    "unique_id": 1191,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 19,
    "structure": "nonisland",
    "sentence": "Megan claimed that the company released the new software ahead of schedule.",
    "unique_id": 1192,
    "item_type": "acceptability"
  },

  // Lexicalization 20
  {
    "lexicalization": 20,
    "structure": "island",
    "sentence": "The landlord discussed the claim that the plumber fixed the leak before the inspection.",
    "unique_id": 1201,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 20,
    "structure": "nonisland",
    "sentence": "The landlord claimed that the plumber fixed the leak before the inspection.",
    "unique_id": 1202,
    "item_type": "acceptability"
  },

  // Lexicalization 21
  {
    "lexicalization": 21,
    "structure": "island",
    "sentence": "Chloe discussed the claim that the chef burned the steak during the dinner service.",
    "unique_id": 1211,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 21,
    "structure": "nonisland",
    "sentence": "Chloe claimed that the chef burned the steak during the dinner service.",
    "unique_id": 1212,
    "item_type": "acceptability"
  },

  // Lexicalization 22
  {
    "lexicalization": 22,
    "structure": "island",
    "sentence": "Ethan discussed the claim that the scientist developed a vaccine in the new lab.",
    "unique_id": 1221,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 22,
    "structure": "nonisland",
    "sentence": "Ethan claimed that the scientist developed a vaccine in the new lab.",
    "unique_id": 1222,
    "item_type": "acceptability"
  },

  // Lexicalization 23
  {
    "lexicalization": 23,
    "structure": "island",
    "sentence": "Hannah discussed the claim that the lawyer filed the report too late.",
    "unique_id": 1231,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 23,
    "structure": "nonisland",
    "sentence": "Hannah claimed that the lawyer filed the report too late.",
    "unique_id": 1232,
    "item_type": "acceptability"
  },

  // Lexicalization 24
  {
    "lexicalization": 24,
    "structure": "island",
    "sentence": "Jason discussed the claim that the committee rejected the proposal without review.",
    "unique_id": 1241,
    "item_type": "acceptability"
  },
  {
    "lexicalization": 24,
    "structure": "nonisland",
    "sentence": "Jason claimed that the committee rejected the proposal without review.",
    "unique_id": 1242,
    "item_type": "acceptability"
  },

  // ============================================================
  // GOOD FILLERS
  // ============================================================

  {
    "sentence": "Wendy baked a cake for the party.",
    "unique_id": 2001,
    "item_type": "filler_good"
  },
  {
    "sentence": "Liam invited his neighbors to the picnic.",
    "unique_id": 2002,
    "item_type": "filler_good"
  },
  {
    "sentence": "Maya finished the book last night.",
    "unique_id": 2003,
    "item_type": "filler_good"
  },
  {
    "sentence": "The children hid the treasure in the garden.",
    "unique_id": 2004,
    "item_type": "filler_good"
  },
  {
    "sentence": "The barista spilled coffee on the counter.",
    "unique_id": 2005,
    "item_type": "filler_good"
  },
  {
    "sentence": "The curator hung the picture in the gallery.",
    "unique_id": 2006,
    "item_type": "filler_good"
  },
  {
    "sentence": "The neighbors saw the comet from their backyard last night.",
    "unique_id": 2007,
    "item_type": "filler_good"
  },
  {
    "sentence": "The mechanic replaced a part in the engine.",
    "unique_id": 2008,
    "item_type": "filler_good"
  },
  {
    "sentence": "Carla watched the movie on Friday.",
    "unique_id": 2009,
    "item_type": "filler_good"
  },
  {
    "sentence": "The hikers set up their tent near the river.",
    "unique_id": 2010,
    "item_type": "filler_good"
  },
  {
    "sentence": "Alex found his friend's jacket in the library.",
    "unique_id": 2011,
    "item_type": "filler_good"
  },
  {
    "sentence": "The band played the song as an encore.",
    "unique_id": 2012,
    "item_type": "filler_good"
  },
  {
    "sentence": "The train left the station in the afternoon.",
    "unique_id": 2013,
    "item_type": "filler_good"
  },
  {
    "sentence": "The baker put the cookies on the tray.",
    "unique_id": 2014,
    "item_type": "filler_good"
  },
  {
    "sentence": "The coach chose Daniel as captain.",
    "unique_id": 2015,
    "item_type": "filler_good"
  },
  {
    "sentence": "The cat knocked a glass off the shelf.",
    "unique_id": 2016,
    "item_type": "filler_good"
  },
  {
    "sentence": "Sarah packed a sleeping bag for the camping trip.",
    "unique_id": 2017,
    "item_type": "filler_good"
  },
  {
    "sentence": "The dentist examined a patient this morning.",
    "unique_id": 2018,
    "item_type": "filler_good"
  },
  {
    "sentence": "Daniel bought some flowers for his mother.",
    "unique_id": 2019,
    "item_type": "filler_good"
  },
  {
    "sentence": "The farmer stored the equipment in the barn.",
    "unique_id": 2020,
    "item_type": "filler_good"
  },
  {
    "sentence": "Rebecca left her keys on the kitchen table.",
    "unique_id": 2021,
    "item_type": "filler_good"
  },
  {
    "sentence": "Sophie photographed the sculpture in the park.",
    "unique_id": 2022,
    "item_type": "filler_good"
  },
  {
    "sentence": "The guests arrived at the hotel in the evening.",
    "unique_id": 2023,
    "item_type": "filler_good"
  },
  {
    "sentence": "The police officer interviewed a witness after the accident.",
    "unique_id": 2024,
    "item_type": "filler_good"
  },


  // ============================================================
  // BAD FILLERS
  // ============================================================

  {
    "sentence": "The rumor that dancing liked nobody believed.",
    "unique_id": 2025,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The tourists taking photos were of shouting confused.",
    "unique_id": 2026,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The cat jumped that scared loudly the child was.",
    "unique_id": 2027,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The neighbor that barking dog kept complained about nobody.",
    "unique_id": 2028,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The doctor that nervous looked yesterday treated the patient did.",
    "unique_id": 2029,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Raining was when the kids outside played did.",
    "unique_id": 2030,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The chair that broken completely sat on the chair.",
    "unique_id": 2031,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The pilot said turbulence during was everyone panicking.",
    "unique_id": 2032,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The restaurant the friends to last summer went closing is now.",
    "unique_id": 2033,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The bride during crying was the ceremony guests smiling.",
    "unique_id": 2034,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The suitcase that broken handle had left was you.",
    "unique_id": 2035,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The letter that important very was mailed nobody.",
    "unique_id": 2036,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The girl did seem that crying was in the hallway.",
    "unique_id": 2037,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The manager said forgot the keys actually did.",
    "unique_id": 2038,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The waiter spilled was everyone the coffee laughing.",
    "unique_id": 2039,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The song that the band to rehearsed never finished was.",
    "unique_id": 2040,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Zoe the guitar tuning did loudly.",
    "unique_id": 2041,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Marcus the visitor greeting was did.",
    "unique_id": 2042,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The baby under blanket slept was crying.",
    "unique_id": 2043,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Nathan the anchored boat did yesterday.",
    "unique_id": 2044,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Isabella backstage the script forgetting did.",
    "unique_id": 2045,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Eric the computer fixing stopped was.",
    "unique_id": 2046,
    "item_type": "filler_bad"
  },
  {
    "sentence": "The firefighter the child rescue did quickly was.",
    "unique_id": 2047,
    "item_type": "filler_bad"
  },
  {
    "sentence": "Victoria into the bottle poured did liquid.",
    "unique_id": 2048,
    "item_type": "filler_bad"
  }

];

window.all_stimuli = [...all_stimuli];