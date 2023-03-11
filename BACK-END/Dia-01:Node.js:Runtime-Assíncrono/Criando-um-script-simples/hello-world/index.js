const readline = require('readline-sync');

const name = readline.question('Qual o seu nome bb?');
const age = readline.question('Qual sua idade?')

console.log(`Hello, ${name}! You are ${age} years old! Cool`);


const promiseParaFazerAlgumaCoisa = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Eu ${name} fiz alguma coisa`), 2000)
  })
}

const assistirAlguemFazendoAlgumaCoisa = async () => {
  const something = await promiseParaFazerAlgumaCoisa()
  return something + '\n e Eu vi você fazendo'
}

const AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa = async () => {
  const something = await assistirAlguemFazendoAlgumaCoisa()
  return something + '\n e Eu também vi você vendo ele fazendo'
}

AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa().then(res => {
  console.log(res)
})