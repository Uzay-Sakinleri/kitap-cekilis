export class Result {
  constructor(winners = [], subWinners = [], type = "") {
    this.winners = winners;
    this.subWinners = subWinners;
    this.type = type;
  }
}
let result = new Result();
const closeWinners = document.querySelector("#close_winners");
const winnersdiv = document.querySelector("#winners_div");
const winnersSec = document.querySelector("#winners_sec");
const winnersOfMonth = document.querySelector("#winners_of_month");
const subwinnersOfMonth = document.querySelector("#subwinners_of_month");
closeWinners.addEventListener("click" , () => {
  winnersdiv.style.display = "none";
});

document.addEventListener("click", (e) => {
  if(e.target !== winnersSec) 
  winnersdiv.style.display = "none";
});

export default function displayWinners(results) {
  winnersSec.querySelectorAll("li").forEach((li) => {
    li.remove();
  })
  result = results;
  result.winners.map((winner) => {
    const li = document.createElement("li");
    li.innerText = winner;
    winnersOfMonth.appendChild(li);
  });
  result.subWinners.map((subwinner) => {

    const li = document.createElement("li");
    li.innerText = subwinner;
    subwinnersOfMonth.appendChild(li);
  });
  winnersdiv.style.display = "flex";
}
