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
function fizzBuzz(numbersArray) {

  let stringsArrays = []

  for (let index in numbersArray) {

    if (numbersArray[index]%3 === 0 && numbersArray[index]% 5 === 0) {
      stringsArrays.push('fizzBuzz');

    } else if (numbersArray[index]%3 === 0) {
    stringsArrays.push('fizz');

    } else if (numbersArray[index]%5 === 0) {
      stringsArrays.push('buzz');

    } else {
      stringsArrays.push('bug!');

     }
  }
   return stringsArrays;
}

// Desafio 9
function encode(decodedPhrase) {

  let codedPhrase = '';

  for (let word in decodedPhrase) {

    let auxiliar = decodedPhrase[word];

    switch(auxiliar) {

      case 'a':
        auxiliar = 1;
        break;
      
      case 'e':
        auxiliar = 2;
        break;
  
      case 'i':
        auxiliar = 3;
        break;
  
      case 'o':
        auxiliar = 4;
        break;
  
      case 'u':
        auxiliar = 5;
        break;
  
      default:
    }

    codedPhrase += auxiliar;
  }
  
  return codedPhrase;
}

function decode(codedPhrase) {

  let decodedPhrase = '';

  for (let word in codedPhrase) {

    let auxiliar = codedPhrase[word];

    switch(auxiliar) {

      case '1':
        auxiliar = 'a';
        break;
      
      case '2':
        auxiliar = 'e';
        break;
  
      case '3':
        auxiliar = 'i';
        break;
  
      case '4':
        auxiliar = 'o';
        break;
  
      case '5':
        auxiliar = 'u';
        break;
  
      default:
    }

    decodedPhrase += auxiliar;
  }
  
  return decodedPhrase;

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
