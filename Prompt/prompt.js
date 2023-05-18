const nome = prompt("Digite seu nome completo:");

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra i no seu nome? ${nome.indexOf(
  "i"
)}<br />`;
document.body.innerHTML += `Qual o último índice da letra i no seu nome? ${nome.lastIndexOf(
  "i"
)}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(
  -3
)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(
  " "
)}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;

/*
Seu nome é: priscilla aparecida onil carrenho
Seu nome tem 33 letras
A segunda letra do seu nome é: r
Qual o primeiro índice da letra i no seu nome? 2
Qual o último índice da letra i no seu nome? 22
As últimas 3 letras do seu nome são: nho
As palavras do seu nome são: priscilla,aparecida,onil,carrenho
Seu nome com letras maiúsculas: PRISCILLA APARECIDA ONIL CARRENHO
Seu nome com letras minúsculas: priscilla aparecida onil carrenho
*/
