export default function winnerPicker(users, count) {
  if(users.length < count) {
    // Geçiçi bir uyarı yazısı, sonrasında daha bilgilendirici bir yazı yazılacaktır
    return "Seçtiğin sayıda kullanıcı bulunamamıştır";
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
