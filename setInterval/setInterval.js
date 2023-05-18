const showHour = () => {
  let data = new Date();

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(data); //jeito mais novo

  // return data.toLocaleTimeString("pt-BR"); //jeito antigo
};

console.log(showHour());

const timer = setInterval(() => {
  console.log(showHour());
}, 1000); //executando a função showHour de 1 em 1 segundo

setTimeout(() => {
  clearInterval(timer);
  console.log("Olá mundo");
}, 4000); //executa uma vez só suas ações. Então depois de 4 segundos ela para o timer e
//aparece no console o Olá mundo
