//splice(índice, quantos deletar, o que incluir)
const numbers = [0, 1, 2, 3, 6];
numbers.splice(4, 0, 4, 5); //posso incluir quantos quiser
console.log({ numbers }); //[0, 1, 2, 3, 4, 5, 6]

//slice(a partir do índice x, até o índice y - 1)
//devolve uma nova array com esses elementos
const numbers1 = [0, 1, 2, 3, 4];
const novoNumbers1 = numbers1.slice(0, 2);
console.log({ novoNumbers1 }); //[0, 1]

//push
//Coloca um elemento a mais no ultimo índice do array
const numbers2 = [0, 1, 2, 3, 4];
numbers2.push(5);
console.log({ numbers2 }); //[0, 1, 2, 3, 4, 5]

//pop
//Tira o ultimo elemento do array
const numbers4 = [0, 1, 2, 3, 4];
numbers4.pop();
console.log({ numbers4 }); // [0, 1, 2, 3]

//shift
//Tira o primeiro elemento do array
const numbers3 = [0, 1, 2, 3, 4];
numbers3.shift();
console.log({ numbers3 }); //[1, 2, 3, 4]

//split
//Pega os elementos, separa pelo o que eu pedir e me devolve uma array com eles
const nome = "Priscilla Onil Carrenho";
const novoNome = nome.split(" "); // está separando pelos espaços
console.log({ novoNome }); //['Priscilla', 'Onil', 'Carrenho']

const frutas = "Banana, Maça, Uva";
const novasFrutas = frutas.split(","); //está separando pelas virgulas
console.log({ novasFrutas }); //['Banana', ' Maça', ' Uva']

//join
//Parecido com o split, só que para juntas os elementos de um array
const nomeSeparado = ["Priscilla", "Onil", "Carrenho"];
const novoNomeSeparado = nomeSeparado.join(" "); //Como coloquei espaço, ele junta dando espaço
console.log({ novoNomeSeparado }); //Priscilla Onil Carrenho

//concat
//concatena arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log({ a3 }); //[1, 2, 3, 4, 5, 6]

//Também pode ser usado o spread
const a4 = [1, 2, 3];
const a5 = [4, 5, 6];
const a6 = [...a4, ...a5];

console.log({ a6 }); //[1, 2, 3, 4, 5, 6]
