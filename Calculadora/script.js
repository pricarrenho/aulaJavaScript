function createCalculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.clickButtons();
      this.pressesBackSpace();
      this.pressesEnter();
    },

    pressesBackSpace() {
      this.display.addEventListener("keydown", (event) => {
        if (event.keyCode === 8) {
          event.preventDefault();
          this.clearDisplay();
        }
      });
    },

    pressesEnter() {
      this.display.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
          this.startCount();
        }
      });
    },

    startCount() {
      let count = this.display.value;

      try {
        count = eval(count);

        if (!count) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(count);
      } catch (error) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clickButtons() {
      document.addEventListener("click", (event) => {
        const element = event.target;

        if (element.classList.contains("btn-number")) {
          this.btnDisplay(element.innerText);
        }

        if (element.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (element.classList.contains("btn-delete")) {
          this.deleteOne();
        }

        if (element.classList.contains("btn-equal")) {
          this.startCount();
        }

        this.display.focus();
      });
    },

    btnDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = createCalculator();
calculadora.start();
