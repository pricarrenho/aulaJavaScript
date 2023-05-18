//For looping:
//Começa com uma constante chamada index, que começa com 0
//Enquanto index for menor que algo, no caso aqui o tamanho do "nome"
//Ele vai alimentando o valor de index, de 1 em 1 (++)

const nome = "Priscilla";

for (let index = 0; index < nome.length; index++) {
  // console.log(nome[index]); //p r i s c i l l a
}

//Só o For in....Le os índices (array) ou chaves (objeto) do objeto
const frutas = ["Pera", "Maça", "Banana"];

for (let index in frutas) {
  // console.log(frutas[index]); // Pera Maça Banana => Um por um, não são juntos
}

const pessoa = {
  nome: "Priscilla",
  sobrenome: "Carrenho",
  idade: 31,
};

for (let chave in pessoa) {
  // console.log(pessoa[chave]); //Priscilla Carrenho 31 => Um por um, não são juntos
}

const pessoas = ["Priscilla", "Rafael"];

for (let index in pessoas) {
  console.log(index);
}

for (let valor of pessoas) {
  console.log(valor);
}
