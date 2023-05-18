//Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número não é divisível por 3 e 5 = Retorna o próprio número
//Checar se é realmente um número

const fizzBuzzExercise = (number) => {
  if (typeof number !== "number") {
    return "Não é um número";
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return "É FizzBuzz";
  }

  if (number % 3 === 0) {
    return "É Fizz";
  }

  if (number % 5 === 0) {
    return "É Buzz";
  }

  return "Número não é divisível por 3 e 5";
};

console.log(fizzBuzzExercise(14));

//Use a função com números de 0 a 100
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzzExercise(i));
}
