// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  let splitText = text.split(' ');
  return splitText;
}

// Desafio 4
function concatName(array) {
  let concatLastFirst = `${array[(array.length) - 1]}, ${array[0]}`;
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
  let biggestNumber = numbersArray[0];
  let repeats = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > biggestNumber) biggestNumber = numbersArray[index];
    if (numbersArray[index] === biggestNumber) repeats += 1;
  }
  return repeats;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) return 'cat1';
  if (distance2 < distance1) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let stringsArrays = [];
  for (let index in numbersArray) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) stringsArrays.push('fizzBuzz');
    else if (numbersArray[index] % 3 === 0) stringsArrays.push('fizz');
    else if (numbersArray[index] % 5 === 0) stringsArrays.push('buzz');
    else stringsArrays.push('bug!');
  }
  return stringsArrays;
}

// Desafio 9
function encode(decodedPhrase) {
  let coded = '';
  for (let i = 0; i < decodedPhrase.length; i += 1) {
    let auxiliar = decodedPhrase[i];
    switch (auxiliar) {
    case 'a': auxiliar = 1; break;
    case 'e': auxiliar = 2; break;
    case 'i': auxiliar = 3; break;
    case 'o': auxiliar = 4; break;
    case 'u': auxiliar = 5; break;
    default:
    }
    coded += auxiliar;
  }
  return coded;
}

function decode(codedPhrase) {
  let decoded = '';
  for (let i = 0; i < codedPhrase.length; i += 1) {
    let auxiliar = codedPhrase[i];
    switch (auxiliar) {
    case '1': auxiliar = 'a'; break;
    case '2': auxiliar = 'e'; break;
    case '3': auxiliar = 'i'; break;
    case '4': auxiliar = 'o'; break;
    case '5': auxiliar = 'u'; break;
    default:
    }
    decoded += auxiliar;
  }
  return decoded;
}

// Desafio 10
function techList(techListArray, personName) {
  if (techListArray.length === 0 || personName === 0) return 'Vazio!';
  techListArray = techListArray.sort();
  let techPerson = [];
  for (let i = 0; i < techListArray.length; i += 1) {
    techPerson.push({
      tech: techListArray[i],
      name: personName,
    });
  }
  return techPerson;
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
