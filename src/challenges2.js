// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length < 11 || phoneNumber.length > 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let repeatedNumber = phoneNumber[index];
    let repetitionCounter = 0;
    for (let i = 0; i < phoneNumber.length; i += 1) {
      if (phoneNumber[i] < 0 || phoneNumber[i] > 9) return 'não é possível gerar um número de telefone com esses valores';
      if (repeatedNumber === phoneNumber[i]) repetitionCounter += 1;
    }
    if (repetitionCounter >= 3) return 'não é possível gerar um número de telefone com esses valores';
  }
  let numberGenerated = '';
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (index === 0) numberGenerated += `(${phoneNumber[index]}`;
    else if (index === 1) numberGenerated += `${phoneNumber[index]}) `;
    else if (index === 6) numberGenerated += `${phoneNumber[index]}-`;
    else numberGenerated += phoneNumber[index];
  }
  return numberGenerated;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = [lineA, lineB, lineC];
  for (let index = 0; index < triangle.length; index += 1) {
    if (index === 0) {
      if (triangle[0] > (triangle[1] + triangle[2]) || triangle[0] < Math.abs(triangle[1] - triangle[2])) {
        return false;
      }
    } else if (index === 1) {
      if (triangle[1] > (triangle[0] + triangle[2]) || triangle[1] < Math.abs(triangle[0] - triangle[2])) {
        return false;
      }
    } else {
      if (triangle[2] > (triangle[0] + triangle[1]) || triangle[2] < Math.abs(triangle[0] - triangle[1])) {
        return false;
      }
    }
  }
  return true;
}

// Desafio 13
function hydrate(drinksDrunk) {
  let extractNumbers = drinksDrunk.match(/\d+/g).map(Number);
  let drinksNumber = 0;
  let glassesWater = 0;
  for (let i = 0; i < extractNumbers.length; i += 1) {
    drinksNumber += extractNumbers[i];
  }
  if (drinksNumber === 1) {
    glassesWater = `${drinksNumber} copo de água`;
  } else {
    glassesWater = `${drinksNumber} copos de água`;
  }
  return glassesWater;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
