import displayWinners from "./displayWinners";
function winnerPicker(users, count, subCount = 0 , type) {
  if(count == 0)  {
  alert("Kaç kişinin kazanacağını seçmediniz.");
  }
  else if (users.length < parseInt(count) + parseInt(subCount))  {
    alert("Seçtiğiniz sayıda kullanıcı adaylarda bulunmamaktadır.");
  }
  else{
  const participants = [...users];
  const winners = [];
  const subWinners = [];
  for (let i = 0; i < parseInt(count) + parseInt(subCount); i++) {
    let winner = participants[Math.floor(Math.random() * participants.length)];
    if (i >= count) {
      subWinners.push(winner);
    }
    else {
      winners.push(winner);
    }
    participants.splice(participants.findIndex(a => a === winner), 1);
  }
  let key = "Çekiliş";
  const results = { winners: winners, subWinners: subWinners, type: type};
  if (localStorage.length === 0) {
    key = "Çekiliş 1 ";
  }
  else {
    key += ` ${localStorage.length + 1}`
  }

  localStorage.setItem(key, JSON.stringify(results));
  displayWinners(results);
  }
}

const rollForm = document.querySelector("#roll_form");
const participantsInput = document.querySelector("#participants");
const winnerCount = document.querySelector("#winner_count");
const subWinnerCount = document.querySelector("#subwinner_count");
const giveawayType = document.querySelector("#type_choice");

rollForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let users;
  if (participantsInput.getAttribute("type") === "file") {
    const userFileInput = participantsInput.files[0];
    const lines = (await userFileInput.text()).split("\n");
    lines.shift();
    users = lines.map((line) => line.split(",")[0]);
    if(users[users.length - 1] === "")
    users.pop();
  }
  else {
    const value = participantsInput.value;
    users = value.split("\n");
    users = users.filter(a => a && a !== "\n");
  }
  winnerPicker(users, winnerCount.value, subWinnerCount.value, giveawayType.value);
});
