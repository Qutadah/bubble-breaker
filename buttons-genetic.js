// TODO: why is this piece of code not working!

var solution = start();
var index = 0;
var btn = document.getElementById('myBtn');
var text = document.getElementById('nextHeuristic');

function changeText() {
  for (index = 0; i < solution.length; index++) {
    text.innerHTML = solution[index];
  }
}

//###########################################################################

console.log(document.querySelector(.'next').textContent);
