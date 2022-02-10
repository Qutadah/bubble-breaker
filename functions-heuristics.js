// <>

// heuristic is same as low-level heuristic

// ############################################## TODO: Heuristic search function types ###############################################################################

// Smallest, largest, minimal, etc..: append found solutions that satisfy the heuristic with respective elementID,
// and then find the best from them.
// H01, H02, H11, H12, H13, H14, H15, H16, H17, H18

// First-to-find solution: no need to append, first to find.
// H03, H04, H05, H06, H07, H08, H09, H10,

// TODO: What is H19 ? append or first-to-find?

// TODO: We can implement a function that compares also all these possibilities randomly? or inner GA ... not so important.. later -- for now randomly ----

//###################################################################################################################################################

// function clicking(elementID) {
//     document.getElementById("elementID").click();
//     let element_id = 0;
// }

// ################### How the search function should work -- STEPS #######################

// 1. find where Q is defined? (current puzzle_layout)      TODO: from updateTiles property

// TODO: 2. scan puzzle_layout - append chosen bubble element ids -- compare them -- decide. (Search functions Hxx)
// TODO: what if there are many options of bubbles to pop that fulfill same criteria of heuristic ?? Should we choose randomly?

// 3. the score from that group of bubbles popping. ----     // TODO: updateScore property

// TODO: 4. call clicking function with input parameter the elementID to click in each heuristic function.

// TODO:  5. fire clicking event: see implications in html and bubble-breaker code.

// 6. Find how to get the new puzzle_layout Q' after heuristic --- TODO: updateTiles Property

// ########################################################## SEARCH FUNCTIONS ##############################################################################

let step_score;

function H01(puzzle_layout) {
  // Clears the smallest set (n >= 2) in Q.
  // search criteria: n_Bubbles

  //  for (var i = 0; i < ; i++) {
  // criteria...
  //if(xx[i].score === )

  //}

  //    clicking(elementID);        // ################# click function call #####################
  step_score = 1;
  return step_score; // score of current popped bubble..
  //do we really need bubble_to_pop?  no just pop and take score..
}

function H02(puzzle_layout) {
  // Clears the smallest set (n >= 2) in Q.
  // search criteria: n_Bubbles

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 53;
  return step_score;
}

function H03(puzzle_layout) {
  // Clears the first column‐shape set (found from left to right, and from top to bottom) in Q. This heuristic has no effect if
  // there is no group that matches this characteristic.

  // search criteria: var bubbleShape or whatever

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 21;
  return step_score;
}

function H04(puzzle_layout) {
  // Same as H03 but search is performed from left to right, and from bottom to top
  // search criteria: var bubbleShape or whatever

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 12;
  return step_score;
}

function H05(puzzle_layout) {
  // Same as H03 but search is performed from right to left, and from top to bottom
  // search criteria: var bubbleShape or whatever

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 57;
  return step_score;
}

function H06(puzzle_layout) {
  // Same as H03 but search is performed from right to left, and from bottom to top
  // search criteria: var bubbleShape or whatever

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 34;
  return step_score;
}

function H07(puzzle_layout) {
  // Clears the first row‐shape set (found from left to right, and from top to bottom) in Q. This heuristic has no effect if there is
  // no group that matches this characteristic.

  // search criteria: var bubbleShapeRow or whatever

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 14;
  return step_score;
}

function H08(puzzle_layout) {
  // Same as H07 but search is performed from left to right, and from bottom to top
  // search criteria: var bubbleShapeRow or whatever

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 62;
  return step_score;
}

function H09(puzzle_layout) {
  // Same as H07 but search is performed from right to left, and from top to bottom.
  // search criteria: var bubbleShape or whatever

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 11;
  return step_score;
}

function H10(puzzle_layout) {
  //Same as H07 but search is performed from right to left, and from bottom to top.
  // search criteria: var bubbleShape or whatever

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 24;
  return step_score;
}

function H11(puzzle_layout) {
  //  Clears the largest set (n >= 2) in Q, provided that clearing any other set does not result in any group in Q' larger than the
  // largest in Q (the one we are clearing).

  // search criteria: var n_Bubbles largest

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 28;
  return step_score;
}

function H12(puzzle_layout) {
  //  Clears the set in Q that maximizes the score obtained by clearing the sets in Q' (one by one,
  // not considering that clearing one set modifies the resulting matrix)

  // search criteria: var maxScoreBubble

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 19;
  return step_score;
}

function H13(puzzle_layout) {
  // Clears the set that minimizes the number of sets present in the resulting Q'
  // search criteria: var newLayoutSetNumber minimize. (append and use smallest)

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 17;
  return step_score;
}

function H14(puzzle_layout) {
  // Clears the set that minimizes the number of minimum‐order sets present in the resulting Q'
  // search criteria: var newLayoutTwoBubbleSets minimize. (append and use smallest)

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 13;
  return step_score;
}

function H15(puzzle_layout) {
  // Clears the set that ensures that the number of minimum‐order sets present in the resulting Q' is equal or less than the
  // number of those sets in Q.
  // search criteria: var newLayoutTwoBubbleSets <= oldLayoutTwoBubbleSets (append and use smallest)

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 17;
  return step_score;
}

function H16(puzzle_layout) {
  // Clears a set from the less abundant color in Q.
  // search criteria: var leastBubblesOfColor minimize. (append and use smallest number and choose color)

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 37;
  return step_score;
}

function H17(puzzle_layout) {
  // Clears the largest set in Q, namely si, provided that clearing any other set would result in a smaller si in Q'
  // search criteria: var clearLargestSetWithoutSmallerLargestSetInNewLayout (append and use smallest)

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 5;
  return step_score;
}

function H18(puzzle_layout) {
  //  Clears the set in Q that results in a Q' containing a larger set than those in Q.
  // search criteria: var clearSetWithLargestSetInNewLayout (append and use smallest)

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 121;
  return step_score;
}

function H19(puzzle_layout) {
  //    TODO: what does this mean?
  // Clears a set if it contains all the same‐colored elements remaining in Q.
  // search criteria: var xxxxxxxxx (append and use smallest)

  // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
  // 2. click this found bubble.

  step_score = 76;
  return step_score;
}
