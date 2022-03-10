//######################  TODO: apply only one heuristic and make loops for it to see if code works, then define all other heuristics...  #################

// #################### 2. start initial solution ############################

// ############## 2. gets random number between two numbers (min, max) ##########

const HEURISTICLENGTH = 50;
const HEURISTICNUMBER = 19;
domain = createDomain();
const STEP = 3;

function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(domain.length - 1);
  return Math.floor(Math.random() * (max - min)) + min;
}

// randomInteger = Math.floor( Math.random() * 7);

function start() {
  var solution = [];
  // generates start gene needed for GA
  solution = Array.from({ length: HEURISTICLENGTH }, () =>
    Math.floor(Math.random() * HEURISTICNUMBER)
  );
  //    console.log(solution);
  return solution;
}

// function heuristics(){

//   let heuristic_lookup = {
//     1: eval('H01(puzzle_layout)'),
//     2: eval('H02(puzzle_layout)'),
//     3: eval('H03(puzzle_layout)'),
//     4: eval('H04(puzzle_layout)'),
//     5: eval('H05(puzzle_layout)'),
//     6: eval('H06(puzzle_layout)'),
//     7: eval('H07(puzzle_layout)'),
//     8: eval('H08(puzzle_layout)'),
//     9: eval('H09(puzzle_layout)'),
//     10: eval('H10(puzzle_layout)'),
//     11: eval('H11(puzzle_layout)'),
//     12: eval('H12(puzzle_layout)'),
//     13: eval('H13(puzzle_layout)'),
//     14: eval('H14(puzzle_layout)'),
//     15: eval('H15(puzzle_layout)'),
//     16: eval('H16(puzzle_layout)'),
//     17: eval('H17(puzzle_layout)'),
//     18: eval('H18(puzzle_layout)'),
//     19: eval('H19(puzzle_layout)'),
//   };
//}

let heuristic_lookup = {
  0: (heuristicScore = 10),
  1: (heuristicScore = 50), // 1: eval('H01(puzzle_layout)'),
  2: (heuristicScore = 20), // 2: eval('H02(puzzle_layout)'),
  3: (heuristicScore = 15), // 3: eval('H03(puzzle_layout)'),
  4: (heuristicScore = 17), // 4: eval('H04(puzzle_layout)'),
  5: (heuristicScore = 10), // 5: eval('H05(puzzle_layout)'),
  6: (heuristicScore = 14), // 6: eval('H06(puzzle_layout)'),
  7: (heuristicScore = 16), // 7: eval('H07(puzzle_layout)'),
  8: (heuristicScore = 22), // 8: eval('H08(puzzle_layout)'),
  9: (heuristicScore = 11), // 9: eval('H09(puzzle_layout)'),
  10: (heuristicScore = 25), // 10: eval('H10(puzzle_layout)'),
  11: (heuristicScore = 25), // 11: eval('H11(puzzle_layout)'),
  12: (heuristicScore = 14), // 12: eval('H12(puzzle_layout)'),
  13: (heuristicScore = 11), // 13: eval('H13(puzzle_layout)'),
  14: (heuristicScore = 11), // 14: eval('H14(puzzle_layout)'),
  15: (heuristicScore = 19), // 15: eval('H15(puzzle_layout)'),
  16: (heuristicScore = 10),
  17: (heuristicScore = 10),
  18: (heuristicScore = 10),
  19: (heuristicScore = 10),
  // 16: eval('H16(puzzle_layout)'),
  // 17: eval('H17(puzzle_layout)'),
  // 18: eval('H18(puzzle_layout)'),
  // 19: eval('H19(puzzle_layout)'),
};

// ###################### NOTE:Maximization problem NOTE #######################

function getFitness(solution_x) {
  //###### solution argument from GA

  let scoreIndividual = 0;
  let currentIndividual = solution_x;
  for (var i = 0; i < currentIndividual.length; i++) {
    let currentHeuristic = currentIndividual[i];
    let heuristicScoreX = heuristic_lookup[currentHeuristic];
    // console.log(
    //   'current heuristic: ',
    //   current_individual[i],
    //   ', heuristic score: ',
    //   heuristic_score_x
    // );
    scoreIndividual += heuristicScoreX;
  }

  // console.log('final score of individual', score_individual);
  return scoreIndividual;
}

// ############################## 1. Domain ###################################

function createDomain() {
  domain = [];
  x = [1, 19];
  for (let i = 1; i <= 50; i++) {
    domain.push(x);
  }
  return domain;
}

// ########################### 2. Mutation #####################################

function getMutation(solutionMutate) {
  if (Math.random < 0.5) {
    do {
      var gene = getRandomInt(0, domain.length - 1); // 50 genes in the solution
    } while (
      // solutionMutate[gene] != domain[gene][0] &&
      solutionMutate[gene] - STEP <
      0
    );
    var mutatedGeneValue = solutionMutate[gene] - STEP;
  } else {
    do {
      var gene = getRandomInt(0, domain.length - 1); // 50 genes in the solution
    } while (solutionMutate[gene] + STEP > 19);
    var mutatedGeneValue = solutionMutate[gene] + STEP;
  }
  solutionMutate[gene] = mutatedGeneValue;
  var mutatedIndividual = solutionMutate;
  return mutatedIndividual;
}

// ####################### 3. Crossover ##########################################

function getCrossover(solution_x1, solution_x2) {
  let solCross = [];
  let gene = getRandomInt(1, domain.length - 2);
  let a = solution_x1.slice(0, gene);
  let b = solution_x2.slice(-(HEURISTICLENGTH - gene));
  solCross = a.concat(b);
  return solCross;
}

// ############################### 4. Genetic Algorithm. #############################

// same GA used in services- python

function compareSecondColumn(a, b) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] > b[1] ? -1 : 1;
  }
}

function getCol(matrix, col) {
  let column = [];
  for (let i = 0; i < matrix.length; i++) {
    column.push(matrix[i][col]);
  }
  return column; // return column data..
}

function genetic_algorithm(
  population_size = 10,
  probability_mutation = 0.3,
  elitism = 0.3,
  number_generations = 5
  //search = false
) {
  const NUMBERELITISIM = Math.floor(elitism * population_size);

  let population = [];
  for (let i = 0; i < population_size; i++) {
    //if (search == True){
    //solution = random_search(domain, fitness_function)
    var solution = start();
    population.push(solution);
  }
  console.log(population);

  costs = [];
  for (let i = 0; i < number_generations; i++) {
    var population_fitness = [];

    if (recon_population) {
      population = recon_population;
    }

    for (let j = 0; j < population.length; j++) {
      current_individual = population[j];
      population_fitness.push(getFitness(current_individual)); // fitness of individuals in population as a fitness_list...
    }

    let arrayOfObject = population.map(function (value, index) {
      return [value, population_fitness[index]];
    });

    arrayOfObject.sort(compareSecondColumn);

    let sliced_population = arrayOfObject.slice(0, NUMBERELITISIM);

    let pushingArray = getCol(sliced_population, 0);

    while (pushingArray.length < population_size) {
      if (Math.random() < probability_mutation) {
        let m = Math.floor(Math.random() * NUMBERELITISIM); //chooses which chromosome i should mutate
        pushingArray.push(getMutation(sliced_population[m][0])); // push the mutation to populate
      } else {
        do {
          var i1 = Math.abs(Math.floor(Math.random() * NUMBERELITISIM - 1));
          var i2 = Math.abs(Math.floor(Math.random() * NUMBERELITISIM - 1));
        } while (i1 == i2);
        pushingArray.push(
          getCrossover(
            sliced_population[i1][0], // two dimensional array
            sliced_population[i2][0]
          )
        ); // push the crossover to populate
      }
    }

    var recon_population = pushingArray;
  }

  for (let j = 0; j < recon_population.length; j++) {
    current_individual = recon_population[j];
    population_fitness.push(getFitness(current_individual)); // fitness of individuals in population as a fitness_list...
  }
  let arrayOfObject = recon_population.map(function (value, index) {
    return [value, population_fitness[index]];
  });

  arrayOfObject.sort(compareSecondColumn);
  let bestIndividual = arrayOfObject[0][0];
  let bestFitness = arrayOfObject[0][1];
  return [bestIndividual, bestFitness];
}

let geneticSolution = genetic_algorithm();

bestIndividual = geneticSolution[0];
bestFitness = geneticSolution[1];

console.log(
  `best solution is given with a fitness of: ${bestFitness} and the best individual is represented by: ${bestIndividual}`
);

// -------------------------------------------- EXTRA CODE ----------------------------------------

// ----------------------------------------------- GENETIC --------------------------------------

// concatenate fitness scores for all individuals

//  arrayOfObject.sort();

// var keys = population;
// var values = population_fitness;

// var individuals_and_fitness = {};
// keys.forEach((key, i) => (individuals_and_fitness[key] = values[i]));
// console.log(individuals_and_fitness);

// // take first x items from dictionary, but first

// var sorted_generation = {};

// sorted(
//   individuals_and_fitness,
//   (key = individuals_and_fitness.get),
//   (reverse = true)
// );

// added to check random
//console.log(number_elitism);

// costs = [];
// for (var i = 0; i < number_generations.length; i++) {
//   for (var j = 0; j < population.length; j++) {
//     costs.push([fitness_function(population[i]), population[i]]); // define costs array of fitness and individuals in the population of X solutions.

//     costs.sort(); // TODO: can it sort list of fitness and individual ascending? [(2995.471957007981, [3, 2, 2, 2, 4, 0, 0, 2, 1, 4, 4, 4, 4, 0, 2, 1, 3, 1, 3, 0, 0])
//     console.log('costs normal', costs);
//     costs.reverse(); // maximum---- individual was in costs too
//     console.log('costs reversed ', costs);
//   }
// }
// console.log('highest score for individual in generation', costs[0][0]);

// // best_individual_in_generation.append(costs[0][0])  ## these 2 lines for vibration plot.
// // generation.append(_)
// let ordered_individuals = [];
// for (i = 0; i < cost.length; i++) {
//   ordered_individuals.push(costs[i][1]); // individuals but orderened array.
// }

// console.log('ordered individuals', ordered_individuals);
// population = ordered_individuals.slice(0, number_elitism); // extract the ordered individuals: first number_elitism of the population

// console.log('population', population);

// -------------------------------------------------- FITNESS ---------------------------------------------------------

// for (next_step = 0; next_step < solution.length; next_step++) {
//   // NOTE: larger than
//   console.log('Heuristic being applied is ' + String(solution[next_step]));
//   console.log(`It's score is ${step_score}`);
//   heuristic_lookup[solution[next_step]];
//   final_score_individual += step_score;
// }

// for (next_step = 0; next_step < 100; next_step++) {  // NOTE: larger than solution set so that heuristic keeps solving even if we are out of heuristics

//     if (boardEmpty) {
//         this.gameFinished('BOARD_EMPTY');
//         solution.slice(0, next_step);
//         console.log("End of Game"); //& delete all members remaining from the solution array..... which method to use for that?
//         break;
//     }
//     if (!this.areThereAnymoreNeighboursAvailable()) {
//         this.gameFinished('NO_MORE_NEIGHBOURS');
//         solution.slice(0, next_step);
//         console.log("End of Game"); //& delete all members remaining from the solution array..... which method to use for that?
//         break;
//     }
//     else if (this.areThereAnymoreNeighboursAvailable() && (next_step > solution.length)) {
//         solution.push(getRandomInt(1, 19)); // append more heuristics to solve if game not ended
//     }

//     console.log('Heuristic being applied is ' + String(solution[next_step]));

//     heuristic_lookup[solution[next_step]];   // ## invoke heuristic, step_score and updateTiles and also choose bubbleID

//     final_score_individual += step_score
// }

// ############################# while loop #################################
//LATER: while loop??

// while ((next_step > solution.length)) && this.areThereAnymoreNeighboursAvailable()) {  // larger than solution set so that heuristic keeps solving even if we are out of heuristics

//     if (!this.areThereAnymoreNeighboursAvailable() || boardEmpty()) {
//         this.gameFinished('BOARD_EMPTY or NO_MORE_NEIGHBOURS');
//         solution.slice(0, next_step);
//         console.log("End of Game"); //& delete all members remaining from the solution array..... which method to use for that?
//         break;
//     }
//     else if () {
//         solution.push(getRandomInt(1, 19)); // append more heuristics to solve if game not ended
//     }

//     console.log('Heuristic being applied is ' + String(solution[next_step]));
//     heuristic_lookup[solution[next_step]];   // ## invoke heuristic, step_score and updateTiles and also choose bubbleID
//     final_score_individual += step_score

// }

// -------------------------------------- FITNESS -----------------------------------------

// gene = getRandomInt(0, domain.length - 1); // 50 genes in the solution

// if (Math.random < 0.5) {
//   if (solution[gene] != domain[gene][0] && solution[gene] - STEP >= 0) {
//     var mutant = [];
//     mutant.push(
//       solution.slice(0, gene),
//       solution[gene] - STEP,
//       solution.slice(Math.max(gene + 1, -1))
//     );
//   } else {
//     getMutation(domain, STEP, solution);
//   }
// } else {
//   if (
//     solution[gene] != domain[gene][1] &&
//     solution[gene] + STEP <= domain.length - 1
//   ) {
//     mutant.push(
//       solution.slice(0, gene),
//       solution[gene] + STEP,
//       solution.slice(Math.max(gene + 1, -1))
//     );
//   } else {
//     getMutation(domain, STEP, solution);
//   }
// }
