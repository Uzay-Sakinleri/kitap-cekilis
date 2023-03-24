export default function winnerPicker(users, count) {
  if(users.length < count) {
    return "Seçtiğin sayıda kullanıcı bulunmamaıştır";
  }
  const participants = [...users];
  const winners = [];
  for(let i = 0; i < count; i++) {
    let winner = participants[Math.floor(Math.random() * participants.length)];
    winners.push(winner);
    participants.splice(participants.findIndex(a => a === winner),1);
  }
  return winners;
}
