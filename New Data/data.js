const showData = document.querySelector(".showData");
const data = new Date().toLocaleDateString("pt-BR", {
  dateStyle: "full",
});

showData.innerHTML = data;
