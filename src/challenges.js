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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance2 < distance1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }

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
