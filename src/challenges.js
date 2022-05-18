// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  let splitText = text.split(" ");
  return splitText;
}

// Desafio 4
function concatName(array) {
  let concatLastFirst = `${array[(array.length)-1]}, ${array[0]}`;
  return concatLastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let totalPoints = wins + ties;
  return totalPoints;
}

let x = [-2,-2,-1];

// Desafio 6
function highestCount(numbersArray) {
  let biggestNumber = 0;
  let repeats = 0;
  
  for (let index = 0; index < numbersArray.length; index += 1) {

    if (index === 0) {
      biggestNumber = numbersArray[index];
    }

    if (numbersArray[index] > biggestNumber) {
      biggestNumber = numbersArray[index];
    }

  }

  for (let index in numbersArray) {
    if (numbersArray[index] === biggestNumber) {
      repeats += 1;
    }
  }

  return repeats;
}

console.log(highestCount(x))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
