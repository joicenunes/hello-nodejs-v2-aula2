const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número\n', (num) => {
  if(isNaN(num))
    console.log(`${num} não é um número válido`);
  else
    console.log(`Você digitou o número ${num}`);
  rl.close();
});
