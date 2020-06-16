/*
Reanne Senkiw
June 10, 2020
*/

// This function returns a random number between (and including both) minimum and maximum
function getRandomInteger (minimum, maximum) {
  minimum = Math.ceil(minimum) // minimum is inclusive
  maximum = Math.floor(maximum + 1) // maximum is exclusive so we add one
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

// Provided Arrays
const nouns = ['Don Draper', 'Peggy Olson', 'Roger Sterling', 'Pete Campbell', 'Joan Holloway', 'Betty Draper', 'Lane Pryce', 'Bert Cooper', 'Ken Cosgrove', 'Michael Ginsberg']

const verbs = ['announced', 'talked', 'loved', 'looked', 'fought', 'frowned', 'presented', 'lied', 'looked', 'said']

const adverbs = ['menacingly', 'intentionally', 'gruffly', 'guiltily', 'stoically', 'curtly', 'secretly', 'clumsily', 'obediently', 'powerfully']

const adjectives = ['wild', 'defiant', 'elegant', 'tired', 'immature', 'depressed', 'repulsed', 'relieved', 'alcoholic', 'arrogant']

const proNouns = ['they', 'who']

const conjunctions = ['and', 'for', 'yet', 'so']

const openings = ['Once upon a time', 'I watched as', 'In the beginning', 'They said', 'Our story began as', 'There was an office where', 'It was the beginning of the end as', 'Under the dim lights', 'Suddenly', 'Under the bright office lights']

const closings = ['if you don\’t like what\’s being said, change the conversation', 'they never really spoke', 'one never knows how loyalty is born', 'it was over', 'it had only just begun', 'it never really started', 'then you realize it\'s just gone', 'said just cash the cheques, you\'re going to die someday', 'it wasn\'t a lie, it was ineptitude with insufficient cover', 'we never found out what happened']

/* Pseudo code:
  
  Add words to the array

  1. Create a function that creates a random sentence
    does this function require any parameters? no
    does this function need to return anything? yes - new random sentence
    how do you create a random sentence?

  2. Create a function that outputs some text
    does this function require parameters? yes - text to output
    does this function need to return anything? no

  3. Execute a loop 10 times
    each cycle of the loop will create new random sentence and then output it
*/

function createRandomSentence () {
  const randomSentence =
    openings[getRandomInteger(0, openings.length - 1)]
    + ' ' +
    adjectives[getRandomInteger(0, adjectives.length - 1)]
    + ' ' +
    nouns[getRandomInteger(0, nouns.length - 1)]
    + ' walked over to ' +
    nouns[getRandomInteger(0, nouns.length - 1)]
    + ' ' +
    proNouns[getRandomInteger(0, proNouns.length - 1)]
    + ' ' +
    adverbs[getRandomInteger(0, adverbs.length - 1)]
    + ' ' +
    verbs[getRandomInteger(0, verbs.length - 1)]
    + ', ' +
    conjunctions[getRandomInteger(0, conjunctions.length - 1)]
    + ' ' +
    closings[getRandomInteger(0, closings.length - 1)]
    + '.'

  return randomSentence
}

function outputSentence (sentence) {
  console.log(sentence)
}

const numberOfSentences = 10

for (let i = 0; i < numberOfSentences; i++) {
  outputSentence(createRandomSentence())
}












// Instructions:

// Arrays:
// Each provided array (except for proNouns) must have at least 10 elements (words or phrases)
// Add/replace words to each array based on any theme you like (keep it tasteful!)
// You do not have to use the example words in any of the provided arrays

// Functions:

// First function:
// Create a function that outputs the text/value sent to it using console.log()
// There should be a newline ("\n") both before and after the value is output
// Name this function appropriately
// Note this function does not return any value


// Second function:
// Create a function that builds a sentence using the 7 provided arrays
// Using the provided getRandomInteger function you will randomly use content from each array based on the random number returned by getRandomInt.
// Because you are using an array the minimum value should always be zero
// The maximum value should be the array length - 1

// The sentence created (concatinated) inside this function should be structured like this:
//      Get a random element from the openings array and add it to your new sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the pro_nouns array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the verbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adverbs array and add it to your sentence
//      add a space (and  punctuation if you wish)
//      next get a random element from the adjectives array and add it to your sentence
//      add closing punctuation.

// Note Feel free to re-arrange your sentence as you wish, just make sure you use the 7 provided arrays
// Note add more arrays if you wish

// Name this function appropriately
// This function should return the completed sentence

// Program Flow:

// inside a loop that repeats 10 times

// Your program will call the "sentence creating" function that you are required to build
// using a new variable you will capture the returned value (the sentence) from this function. Name this variable appropriately

// next you will send this variable to the other function you created used for output
// this will result in your random sentence being output.

// Other considerations:
// Everyone's code should be different
// This is a fun exercise so... have fun!

// Submission
// Submit your GitHub repo URL through the LMS.