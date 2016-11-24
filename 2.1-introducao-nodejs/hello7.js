const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nomes = [];
var nomeArquivo;

function askName(){
rl.question("Digite o nome do arquivo:\n", (name) => {
	nomeArquivo = name;
	lenomes(3);
});


}
function lenomes(count){
  if(count--){
    rl.question("Digite um nome:\n",function(line){
      nomes.push(line);
      lenomes(count);
    });
  }else gravaarquivo();
}

function gravaarquivo(){

  for(var i in nomes)
    fs.appendFile(nomeArquivo+".txt",nomes[i]+"\n");

  rl.close();
  console.log("Arquivo "+nomeArquivo+".txt salvo!");
}

askName();
