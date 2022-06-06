const pergunta = document.getElementById("pergunta");
const resposta = document.querySelector("span");
const button = document.getElementById("button");

function setAnswer() {
  rng = parseInt(Math.random() * 10 + 1);
  let texto = "texto base";
  switch (rng) {
    case 1:
      texto = "Talvez sim.";
      break;
    case 2:
      texto = "Talvez não.";
      break;
    case 3:
      texto = "Tudo indica que sim.";
      break;
    case 4:
      texto = "Tudo indica que não.";
      break;
    case 5:
      texto = "Se o universo quiser, será.";
      break;
    case 6:
      texto = "Um dia, talvez.";
      break;
    case 7:
      texto = "O Universo conspira contra.";
      break;
    case 8:
      texto = "Com certeza.";
      break;
    case 9:
      texto = "De forma alguma.";
      break;
    case 10:
      texto = "Em breve.";
      break;
  }
  resposta.innerText = texto;
}

function showAnswer() {
  const isQuestion = pergunta.value.includes("?");
  console.log(isQuestion)
  if (isQuestion) { setAnswer()
  } else {
    resposta.innerText = "Foco. Isto não é uma pergunta.";
  }
  resposta.classList.add("ativo");
  setTimeout(() => resposta.classList.remove("ativo"), 5000);
}

button.addEventListener("click", showAnswer);
