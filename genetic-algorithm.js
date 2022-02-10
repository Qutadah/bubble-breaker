'use strict';

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


// TODO: code to use:
// let element_id = null;



function clicking(elementID) {
    document.getElementById("elementID").click();
}


//######################  TODO: apply only one heuristic and make loops for it to see if code works, then define all other heuristics...  ################# 

// ################################################## How the search function should work -- STEPS #############################################


// 1. find where Q is defined? (current puzzle_layout)      TODO: from updateTiles property

// TODO: 2. scan puzzle_layout - append chosen bubble element ids -- compare them -- decide. (Search functions Hxx)
// TODO: what if there are many options of bubbles to pop that fulfill same criteria of heuristic ?? Should we choose randomly? 


// 3. the score from that group of bubbles popping. ----     // TODO: updateScore property

// TODO: 4. call clicking function with input parameter the elementID to click in each heuristic function.

// TODO:  5. fire clicking event: see implications in html and bubble-breaker code.


// 6. Find how to get the new puzzle_layout Q' after heuristic --- TODO: updateTiles Property 


// ########################################################## SEARCH FUNCTIONS ##############################################################################

function H01(puzzle_layout) {
    // Clears the smallest set (n >= 2) in Q.
    // search criteria: n_Bubbles


    for (var i = 0; i < ; i++) {
        // criteria...
        //if(xx[i].score === )

    }

    clicking(elementID);        // ################# click function call #####################

    return step_score; // score of current popped bubble..
    //do we really need bubble_to_pop?  no just pop and take score..
}

function H02(puzzle_layout) {
    // Clears the smallest set (n >= 2) in Q.
    // search criteria: n_Bubbles

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.


    return bubble_to_pop;
}

function H03(puzzle_layout) {
    // Clears the first column‐shape set (found from left to right, and from top to bottom) in Q. This heuristic has no effect if
    // there is no group that matches this characteristic.

    // search criteria: var bubbleShape or whatever

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H04(puzzle_layout) {
    // Same as H03 but search is performed from left to right, and from bottom to top
    // search criteria: var bubbleShape or whatever

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H05(puzzle_layout) {
    // Same as H03 but search is performed from right to left, and from top to bottom
    // search criteria: var bubbleShape or whatever

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H06(puzzle_layout) {
    // Same as H03 but search is performed from right to left, and from bottom to top
    // search criteria: var bubbleShape or whatever

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H07(puzzle_layout) {
    // Clears the first row‐shape set (found from left to right, and from top to bottom) in Q. This heuristic has no effect if there is
    // no group that matches this characteristic.

    // search criteria: var bubbleShapeRow or whatever

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H08(puzzle_layout) {
    // Same as H07 but search is performed from left to right, and from bottom to top
    // search criteria: var bubbleShapeRow or whatever

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H09(puzzle_layout) {
    // Same as H07 but search is performed from right to left, and from top to bottom.
    // search criteria: var bubbleShape or whatever

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H10(puzzle_layout) {
    //Same as H07 but search is performed from right to left, and from bottom to top.
    // search criteria: var bubbleShape or whatever

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H11(puzzle_layout) {
    //  Clears the largest set (n >= 2) in Q, provided that clearing any other set does not result in any group in Q' larger than the
    // largest in Q (the one we are clearing).

    // search criteria: var n_Bubbles largest

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H12(puzzle_layout) {
    //  Clears the set in Q that maximizes the score obtained by clearing the sets in Q' (one by one,
    // not considering that clearing one set modifies the resulting matrix)

    // search criteria: var maxScoreBubble

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H13(puzzle_layout) {
    // Clears the set that minimizes the number of sets present in the resulting Q'
    // search criteria: var newLayoutSetNumber minimize. (append and use smallest)

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}
function H14(puzzle_layout) {
    // Clears the set that minimizes the number of minimum‐order sets present in the resulting Q'
    // search criteria: var newLayoutTwoBubbleSets minimize. (append and use smallest)

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H15(puzzle_layout) {
    // Clears the set that ensures that the number of minimum‐order sets present in the resulting Q' is equal or less than the
    // number of those sets in Q.
    // search criteria: var newLayoutTwoBubbleSets <= oldLayoutTwoBubbleSets (append and use smallest)

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H16(puzzle_layout) {
    // Clears a set from the less abundant color in Q.
    // search criteria: var leastBubblesOfColor minimize. (append and use smallest number and choose color)

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H17(puzzle_layout) {
    // Clears the largest set in Q, namely si, provided that clearing any other set would result in a smaller si in Q'
    // search criteria: var clearLargestSetWithoutSmallerLargestSetInNewLayout (append and use smallest)

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H18(puzzle_layout) {
    //  Clears the set in Q that results in a Q' containing a larger set than those in Q.
    // search criteria: var clearSetWithLargestSetInNewLayout (append and use smallest)

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}

function H19(puzzle_layout) {
    //    TODO: what does this mean?
    // Clears a set if it contains all the same‐colored elements remaining in Q.
    // search criteria: var xxxxxxxxx (append and use smallest)

    // 1. add for loop (element_id) and try to pop bubbles and see choosing criteria.
    // 2. click this found bubble.

    return bubble_to_pop;
}


//################################ Heuristic function mapping with the gene (chromosomes array) - heuristic-number ####################################################

let heuristic_lookup = {
    1: eval("H01(puzzle_layout)"),
    2: eval("H02(puzzle_layout)"),
    3: eval("H03(puzzle_layout)"),
    4: eval("H04(puzzle_layout)"),
    5: eval("H05(puzzle_layout)"),
    6: eval("H06(puzzle_layout)"),
    7: eval("H07(puzzle_layout)"),
    8: eval("H08(puzzle_layout)"),
    9: eval("H09(puzzle_layout)"),
    10: eval("H10(puzzle_layout)"),
    11: eval("H11(puzzle_layout)"),
    12: eval("H12(puzzle_layout)"),
    13: eval("H13(puzzle_layout)"),
    14: eval("H14(puzzle_layout)"),
    15: eval("H15(puzzle_layout)"),
    16: eval("H16(puzzle_layout)"),
    17: eval("H17(puzzle_layout)"),
    18: eval("H18(puzzle_layout)"),
    19: eval("H19(puzzle_layout)")
}

// #####################################################################################################################################################################


// TODO: calculation of solution fitness and solving the problem visually inside the fitness function.

// Maximization problem

// ################################################################### Fitness function #################################################################################


function fitness(solution) {   //###### solution argument from GA

    let final_score_individual = 0;
    let next_step;

    

    // next_step is the next chromosome in gene
    //TODO: maybe while loop??

    for (next_step = 0; next_step < 100; next_step++) {  // NOTE: larger than solution set so that heuristic keeps solving even if we are out of heuristics

        if (boardEmpty) {
            this.gameFinished('BOARD_EMPTY');
            solution.slice(0, next_step);
            console.log("End of Game"); //& delete all members remaining from the solution array..... which method to use for that?
            break;
        }
        if (!this.areThereAnymoreNeighboursAvailable()) {
            this.gameFinished('NO_MORE_NEIGHBOURS');
            solution.slice(0, next_step);
            console.log("End of Game"); //& delete all members remaining from the solution array..... which method to use for that?
            break;
        }
        else if (this.areThereAnymoreNeighboursAvailable() && (next_step > solution.length)) {
            solution.push(getRandomInt(1, 19)); // append more heuristics to solve if game not ended
        }

        console.log('Heuristic being applied is ' + String(solution[next_step]));

        heuristic_lookup[solution[next_step]];   // ## invoke heuristic, step_score and updateTiles and also choose bubbleID

        final_score_individual += step_score
    }

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
    return final_score_individual;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////// execution code //////////////////////////////////////////////////////////////////////////


//##################################################################### 1. create domain #####################################################################

function createDomain() {
    domain = [];
    x = [1, 19];
    for (i = 1; i <= 50; i++) {
        domain.push(x);
    }
    return domain;
}

console.log(createDomain());

// [1, 19] [Array(2), Array(2), Array(2), Array(2), Array(2) created as domain with each entry [0,19] x 50 entries


// ############################################################### 2. start initial solution ###################################################################

function start() {
    // generates start gene needed for GA
    solution = Array.from({ length: 50 }, () => Math.floor(Math.random() * 19));
    //    console.log(solution);
    return solution;
}
solution = start();

//#################################################### 3. gets random number between two numbers (min, max) #####################################################

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(domain.length - 1);
    return Math.floor(Math.random() * (max - min)) + min;
}


// randomInteger = Math.floor( Math.random() * 7);

// console.log(randomInteger);


// ######################################################################### 4. Mutation ############################################################################

const STEP = 1;

function mutation(domain, STEP, solution) {
    //TODO: check solution if sliced... is the code correct ? does it append?
    if (solution.length < 50) {
        solution = Array.from({ length: 50 }, () => Math.floor(Math.random() * 19));
    }

    gene = getRandomInt(0, 49);  // 50 genes in the solution
    // just or making sure random number is limited between low-level heuristics.
    // Code is for if larger than 19, check getRandomInt code, make it correct..
    if (gene >= 19) {
        gene = getRandomInt(1, 19);
    } else {
        continue
    }
    mutant = solution;

    if (Math.random < 0.5) {
        if ((solution[gene] != domain[gene][0]) && ((solution[gene] - STEP) >= 0)) {
            mutant = [];
            mutant.push(solution.slice(0, gene), solution[gene] - STEP, solution.slice(Math.max(gene + 1, -1)))
        } else {
            mutation(domain, STEP, solution);
        }
    }
    else {
        if ((solution[gene] != domain[gene][1]) && (solution[gene] + STEP) <= 4) {
            mutant.push(solution.slice(0, gene), solution[gene] + STEP, solution.slice(Math.max(gene + 1, -1)))
        } else {
            mutation(domain, STEP, solution);
        }
    }
    return mutant;
}

// ################################################################### 5. Crossover ###########################################################################

function crossover(domain, solution1, solution2) {

    //TODO: check solution if sliced... is the code correct ? does it append?
    if (solution.length < 50) {
        solution = Array.from({ length: 50 }, () => Math.floor(Math.random() * 19));
    }

    // where i want to cut the chromosomes, get away from ends..
    gene = getRandomInt(1, domain.length - 2);
    solCross.push(solution1.slice(0, gene), solution2.slice(gene, -1));
    return solCross;
}

// ##################################################################### 6. define Genetic Algorithm. ####################################################################

// same GA used in services- python

function genetic_algorithm(domain, fitness_function, population_size = 5, STEP, probability_mutation = 0.3, elitism = 0.2, number_generations = 5, search = False) {

    let individualScoresList = [];    //global variable


    let population = [];
    for (i = 0; i < population_size.length; i++) {
        //if (search == True){
        //solution = random_search(domain, fitness_function)
        solution = start();
    }
    population.push(solution);

    console.log(population);

    // concatenate fitness scores for all individuals

    let fitness_list = 0;
    for (i = 0; i < population.length; i++) {
        fitness_list.push(fitness(population[i]));     // fitness of individuals in population as a fitness_list...
    }
    fitness_list.sort();
    fitness_list.reverse();

    number_elitism = Math.floor(elitism * population_size);  // this is the number of individuals we will take from the population.
    costs = [];
    // added to check random
    console.log(number_elitism);

    for (i = 0; i < number_generations.length; i++) {
        for (i = 0; i < population.length; i++) {
            costs.push([fitness_function(population[i]), population[i]]);  // define costs array of fitness and individuals in the population of X solutions.
            costs.sort();  // TODO: can it sort list of fitness and individual ascending? [(2995.471957007981, [3, 2, 2, 2, 4, 0, 0, 2, 1, 4, 4, 4, 4, 0, 2, 1, 3, 1, 3, 0, 0]) 

            costs.reverse(); // because we need maximum     // individual was in costs too
            console.log("costs ", costs);
        }
    }

    console.log("highest score for individual in generation", costs[0][0]);


    //best_individual_in_generation.append(costs[0][0])  ## these 2 lines for vibration plot.
    //generation.append(_)
    let ordered_individuals = [];

    for (i = 0; i < cost.length; i++) {
        ordered_individuals.push(costs[i][1]);  // individuals but orderened array.
    }

    population = ordered_individuals.slice(0, number_elitism);  // extract the ordered individuals: first number_elitism of the population

    while (population.length < population_size) {
        if (Math.random() < probability_mutation) {
            let m;
            m = Math.floor(Math.random() * number_elitism);  //chooses which chromosome i should mutate
            population.push(mutation(domain, step, ordered_individuals[m]));
        }
        else {
            i1 = Math.floor(Math.random() * number_elitism + 1);  // TODO: check the plus 1
            i2 = Math.floor(Math.random() * number_elitism);
            population.push(crossover(domain, ordered_individuals[i1], ordered_individuals[i2]));
        }
    }
    return [costs[0][0], costs[0][1]];
}