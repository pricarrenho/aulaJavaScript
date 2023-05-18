//Filter pega uma array e filtra os valores
//Não consigo modificar os valores
//Retorna o mesmo tamanho da array ou menor
const numbers = [5, 50, 8, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const filterNumbers = numbers.filter((value) => value > 10);
console.log(filterNumbers); //[50, 11, 15, 22, 27]

const pessoas = [
  { nome: "Priscilla", idade: 31 },
  { nome: "Rafael", idade: 32 },
  { nome: "Antonio", idade: 82 },
  { nome: "MariA", idade: 74 },
  { nome: "Gabriel", idade: 22 },
  { nome: "Ricardo", idade: 52 },
];

const pessoas2 = pessoas.filter((objeto) => objeto.nome.length >= 7);
console.log(pessoas2); // Nomes com mais de 7 letras

const pessoas3 = pessoas.filter((objeto) => objeto.idade > 50);
console.log(pessoas3); // Pessoas com idade maior que 50

const pessoas4 = pessoas.filter((objeto) =>
  objeto.nome.toLowerCase().endsWith("a")
); // Pessoas que o nome termina com a
console.log(pessoas4);
