const pergunta = document.getElementById("pergunta");
const resposta = document.querySelector("span");
const button = document.getElementById("button");

function setAnswer() {
  rng = parseInt(Math.random() * 10);

  let texto = "texto base";

  const respostas = {
    0: "Talvez sim.",
    1: "Talvez não.",
    2: "Tudo indica que sim.",
    3: "Tudo indica que não.",
    4: "Se o universo quiser, será.",
    5: "Um dia, talvez.",
    6: "O Universo conspira contra.",
    7: "Com certeza.",
    8: "De forma alguma.",
    9: "Em breve.",
  };

  const respostasArray = Object.values(respostas);
  texto = respostasArray[rng];
  resposta.innerText = texto
}

function showAnswer() {
  const isQuestion = pergunta.value.includes("?");
  if (isQuestion) {
    setAnswer();
  } else {
    resposta.innerText = "Foco. Isto não é uma pergunta.";
  }
  resposta.classList.add("ativo");
  setTimeout(() => resposta.classList.remove("ativo"), 5000);
  pergunta.value = "";
}

button.addEventListener("click", showAnswer);
