//Reduce
//reduce((acumulador, valor, indice, array) => {}, valor inicial do acumulador)

//Somando os valores
const numbers = [1, 2, 3];
const totalSoma = numbers.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(totalSoma); //6

//Retornando só os valores pares
const numbers2 = [5, 50, 8, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numbers2.reduce((acumulador, valor) => {
  if (valor % 2 === 0) {
    acumulador.push(valor);
  }
  return acumulador;
}, []);
console.log(numerosPares); //[50, 8, 2, 8, 22]
