const formTasks = document.querySelector(".formTasks");
const inputTasks = document.querySelector(".inputTasks");
const tasks = document.querySelector(".tasks");

function createLi() {
  const li = document.createElement("li");
  return li;
}

function clearInput() {
  inputTasks.value = "";
  inputTasks.focus();
}

function createDeleteButton(li) {
  li.innerText += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Apagar";
  deleteButton.setAttribute("class", "delete");
  li.appendChild(deleteButton);
}

function createTasks(inputText) {
  const li = createLi();
  li.innerText = inputText;
  tasks.appendChild(li);

  clearInput();
  createDeleteButton(li);
}

function handleSubmit(event) {
  event.preventDefault();

  if (!inputTasks.value) return;
  createTasks(inputTasks.value);
}

function handleDelete(event) {
  const element = event.target;

  if (element.classList.contains("delete")) {
    element.parentElement.remove();
  }
}

formTasks.addEventListener("submit", handleSubmit);

document.addEventListener("click", handleDelete);
