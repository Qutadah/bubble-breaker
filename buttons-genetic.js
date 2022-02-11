// TODO: why is this piece of code not working!

let solution = start();
let index = 0;
let btn = document.getElementById('myBtn');
let text = document.getElementById('nextHeuristic-button');

function changeText() {
  for (index = 0; i < solution.length; index++) {
    text.innerHTML = solution[index];
  }
}

//###########################################################################

// console.log((document.querySelector('.next').textContent = 'What!'));
