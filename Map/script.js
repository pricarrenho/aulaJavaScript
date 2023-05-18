//Map
//Vai ter sempre o mesmo tamanho que a array original
//Posso modificar os valores que retornam

const numbers = [5, 50, 8, 1, 2, 3];
const numbers2 = numbers.map((item) => `R$ ${item}`);
console.log(numbers2); //['R$ 5', 'R$ 50', 'R$ 8', 'R$ 1', 'R$ 2', 'R$ 3']

const pessoas = [
  { nome: "Priscilla", idade: 31 },
  { nome: "Rafael", idade: 32 },
  { nome: "Antonio", idade: 82 },
  { nome: "Maria", idade: 74 },
  { nome: "Gabriel", idade: 22 },
  { nome: "Ricardo", idade: 52 },
];

const nomes = pessoas.map((item) => item.nome);
console.log(nomes); //['Priscilla', 'Rafael', 'Antonio', 'Maria', 'Gabriel', 'Ricardo']

const idades = pessoas.map((item) => item.idade);
console.log(idades); //[31, 32, 82, 74, 22, 52]

const colocandoIds = pessoas.map((item, indice) => {
  item.id = indice;
  return item;
});
console.log(colocandoIds);
