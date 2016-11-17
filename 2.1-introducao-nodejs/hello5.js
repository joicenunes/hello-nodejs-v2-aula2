const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nomes = [];
var nomeArquivo;

function leNome(){
rl.question("Digite o nome do arquivo:\n", (nomeArquivo1) => {
	nomeArquivo = nomeArquivo1;
	leiapais(5);
});


}
function leiapais(count){
  if(count--){
    rl.question("Digite o nome do pais:\n",function(line){
      nomes.push(line);
      leiapais(count);
    });
  }else gravaarquivo();
}

function gravaarquivo(){

  for(var i in nomes)
    fs.appendFile(nomeArquivo+".txt",nomes[i]+"\n");

  rl.close();
  console.log("Arquivo "+nomeArquivo+".txt salvo!");
}

leNome();
