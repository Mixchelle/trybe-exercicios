const { allowedNodeEnvironmentFlags } = require('process');
const readline = require('readline-sync');

const fs = require('fs').promises;

async function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
   .then((fileContent) => {
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  // nao entendi da necessidade do forEach nessa parte se  apenas com map exibe o array
  // console.log(strings);
  strings.forEach((string) => console.log(string));
});
}


async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);

const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

if (!chosenSimpson) {
  throw new Error('id não encontrado');
}
return chosenSimpson;
}

async function filterSimpsons() {
  const fileContent = await fs
   .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function main() {
  // await readAll();
//  await getSimpsonById(2)
//  .then((simpson) => console.log(simpson));
filterSimpsons(5);
}

main();