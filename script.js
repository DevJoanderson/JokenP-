/* 
1: pega os botãos e ver ser eles estão sendo chamados X 

2: pega a escolha da maquina

3: vou criar uma terceira função que vai verificar quem galhou  

4: preciso colocar a pontução de quem galhoou na tela e quem galhou cada rodada
*/
const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["stone", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + "Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === "paper" && machine === "stone") ||
    (human === "stone" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você ganhou!";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu para a Alexa!";
  }
};
