const number = Number(prompt("Digite seu número aqui"));
const numberTitle = document.querySelector(".numberTitle");
const text = document.querySelector(".text");

numberTitle.innerHTML = number;
text.innerHTML = "";
text.innerHTML += `Raiz quadrada: ${(number ** 0, 5)}<br>`;
text.innerHTML += `${number} é inteiro: ${Number.isInteger(number)}<br>`;
text.innerHTML += `É NaN: ${Number.isNaN(number)} <br>`;
text.innerHTML += `Arredondando para baixo ${Math.floor(number)}<br>`;
text.innerHTML += `Arredondando para cima ${Math.ceil(number)}<br>`;
text.innerHTML += `Com duas casas decimais ${number.toFixed(2)} <br>`;
