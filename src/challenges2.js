// Desafio 11
function generatePhoneNumber(phoneNumber) {

  if (phoneNumber.length < 11 || phoneNumber.length > 11) {
    return 'Array com tamanho incorreto.';
  } 

  for (index = 0; index < phoneNumber.length; index += 1){

    let repeatedNumber = phoneNumber[index]
    let repetitionCounter = 0;
  
    for (i = 0; i < phoneNumber.length; i += 1) {
  
      if (repeatedNumber === phoneNumber[i]) {
        repetitionCounter += 1;
      }
    }
  
    if (repetitionCounter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (index = 0; index < phoneNumber.length; index += 1) {

    if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let numberGenerated = '';

  for (index = 0; index < phoneNumber.length; index += 1) {

    if (index === 0) {
      numberGenerated += "("+phoneNumber[index];
    
    } else if (index === 1) {
      numberGenerated += phoneNumber[index]+") ";
  
    } else if (index === 6) {
      numberGenerated += phoneNumber[index]+"-";
  
    } else {
      numberGenerated += phoneNumber[index] ;

    }
  }
  return numberGenerated;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  let triangle = [lineA, lineB, lineC];

  for (let index = 0; index < triangle.length; index += 1) {

    if (index === 0) {

      if (triangle[0] < (triangle[1] + triangle[2])) {
      } else {
        return false;
      }

      if (triangle[0] > Math.abs(triangle[1] - triangle[2])) {
      } else {
        return false;
          }
        
    } else if (index === 1) {

      if (triangle[1] < (triangle[0] + triangle[2])) {
      } else {
        return false;
      }

      if (triangle[1] > Math.abs(triangle[0] - triangle[2])) {
      } else {
        return false;
          }
  
    } else {
  
      if (triangle[2] < (triangle[0] + triangle[1])) {
      } else {
        return false;
      }
  
      if (triangle[2] > Math.abs(triangle[0] - triangle[1])) {
      } else {
        return false;
      }
      
    }
  }
  return true;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
