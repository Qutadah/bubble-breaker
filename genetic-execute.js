// TODO: not working: user promt to enter first individual, now just random start function is better.
function start() {
  solution = Array.from({ length: 50 }, () => Math.floor(Math.random() * 19));
  console.log(solution);
  return solution;
}

// TODO: why is this piece of code not working!

var solution = start();
var index = 0;
var btn = document.getElementById("myBtn");
var text = document.getElementById("nextHeuristic");

function changeText() {
  for (index = 0; i < solution.length; index++) {
    text.innerHTML = solution[index];
  }
}

//btn.addEventListener("click", changeText);

// TODO: should i remove this event? make it for click and not key... THIS IS ORIGINAL CODE SNIPPET FROM INTERNET
/*
window.addEventListener("keydown", function (event) { //TODO: adjust to heuristic_lookup variable as input of function...
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowDown":
        // code for "down arrow" key press.
        break;
      case "ArrowUp":
        // code for "up arrow" key press.
        break;
      case "ArrowLeft":
        // code for "left arrow" key press.
        break;
      case "ArrowRight":
        // code for "right arrow" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    } 
    */

// nextLLheuristic = solution[0]; // TODO: This is important, it logs to console though.....
//console.log(nextLLheuristic);

//const input = prompt("What's the first  gene?");
//alert(`The solution individual is ${input} \n The puzzle will be solved according to this heuristic` );

// TODO: maybe important
//document.getElementById('gene').setAttribute('value', solution[0]);

// start fitness function of individual.

function fitness(solution) {
  // use for loop to execute the function from the heuristics-lookup object one by one and sum scores and find pass through fitness function and GA.
  //heuristic applied for each step in the gene

  const individual_scores = []; //global variable
  var final_individual_score = 0;
  var next_step;
  for (next_step = 0; next_step < solution.length; next_step++) {
    // put a try-catch block for end of game! Check if game ended already, dann nicht mehr weitermachen!

    // if end of game console.log("End of Game") & delete all members remaining from the solution array..... which method to use for that?

    //else
    console.log("Heuristic being applied is " + String(solution[next_step]));

    // use the heuristic_lookup object to execute the current chromosome or heuristic, and click the bubble (implemented inside
    // heuristic functions)
    heuristic_lookup[solution[next_step]];

    // add to the score...
    final_individual_score += step_score; //take score from bubble-breaker.js
  }
  // the genetic algorithm and use selection.
  individual_scores.push(final_individual_score);

  return final_individual_score;
}

// Implement GA..... from dev.os GA...
