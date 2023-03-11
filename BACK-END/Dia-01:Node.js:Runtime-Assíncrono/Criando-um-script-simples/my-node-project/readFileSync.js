// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }

const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}
main();

async function main2() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Eu não saio por aí procurando encrenca. Em geral as encrencas é que vêm ao meu encontro.');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}


main2();
