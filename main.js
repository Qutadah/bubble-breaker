// NOTE: ADDED COMPLETE STRUCTURE HERE AND CALLING FUNCTIONS.

//NOTE: This file gathers all code together to run as a single unit

function include(filename) {
  var head = document.getElementsByTagName('head')[0];

  var script = document.createElement('script');
  script.src = filename;
  script.type = 'text/javascript';

  head.appendChild(script);
}

include('genetic_algorithm.js');
