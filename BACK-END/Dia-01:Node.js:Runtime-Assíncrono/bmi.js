const readline = require('readline-sync');

const alt = readline.questionInt('Qual a sua altura?')
const peso = readline.questionFloat('Qual o seu peso?')

const calIMC = () => { 
 const alturacovert = alt / 100;
 const alturaaoquadrado = alturacovert ** 2;
 const IMC = peso / alturaaoquadrado;

 return IMC;
}

const IMC_MAX_AND_MIN = {
  'muito abaixo do peso': {
    minIMC: 0,
    maxIMC: 16.9,
  },
  'abaixo do peso': {
    minIMC: 17,
    maxIMC: 18.4,
  },
  'normal': {
    minIMC: 18.5,
    maxIMC: 24.9,
  },
  'acima do peso': {
    minIMC: 25,
    maxIMC: 29.9,
  },
  'obesidade grau I': {
    minIMC: 30.0,
    maxIMC: 34.9,
  },
  'obesidade grau II': {
    minIMC: 35,
    maxIMC: 39.9,
  },
  'obesidade grau III': {
    minIMC: 40,
    maxIMC: 1000,
  },
};

const IMCResult = (IMC) => {
  const statuses = Object.keys(IMC_MAX_AND_MIN);
  const resultFind = statuses.find((status) => {
    const { maxIMC, minIMC } = IMC_MAX_AND_MIN[status];
    return IMC >= minIMC && IMC <= maxIMC;
  });

  return resultFind;
}


function main() {
  const IMC = calIMC(peso, alt)
  const bmiResult = IMCResult(IMC)
  console.log(`IMC: ${IMC.toFixed(2)}`);
  console.log(bmiResult);
}

main();

modulo.exports = { main }
