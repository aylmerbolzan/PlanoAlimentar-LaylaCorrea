// Chamada das variáveis

const telaLogin = document.querySelector("#login");
const telaPlano = document.querySelector("#noprint");
const shortcuts = document.querySelector("#shortcuts");

const sendBtn = document.querySelector("#enviar");
const cleanBtn = document.querySelector("#limpar");

const userInput = document.querySelector("#user");
const passInput = document.querySelector("#pass");

const userCadastro = "layla";
const passCadastro = "juda";

// Declaração das funções

function showOrHide() {
  telaLogin.classList.toggle("hide");
  telaPlano.classList.toggle("hide");
  shortcuts.classList.toggle("hide");
}

function cleanInputs() {
  userInput.value = "";
  passInput.value = "";
}

// Eventos

cleanBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cleanInputs();
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (userInput.value == userCadastro && passInput.value == passCadastro) {
    showOrHide();
  } else {
    alert("Usuário ou senha incorretos");
    cleanInputs();
    document.getElementById("user").focus();
  }
});
