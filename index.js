let countVictory = 530
let countLoss = 456

const victorys = getVictorys(countVictory, countLoss)

function getVictorys (victory, loss) {
  return victory - loss
}

function getRanked(victorys) {
  let rank
  if (victorys <= 10) {
    rank = "Ferro"
  } else if (victorys <= 20) {
    rank = "Bronze"
  } else if (victorys <= 50) {
    rank = "Prata"
  } else if (victorys <= 80) {
    rank = "Ouro"
  } else if (victorys <= 90) {
    rank = "Diamante"
  } else if (victorys <= 100) {
    rank = "Lendário"
  } else if (victorys >= 101) {
    rank = "Imortal"
  }
  return rank
}
const ranked = getRanked(victorys)

console.log("O Herói tem de saldo de " + victorys + " está no nível de " + ranked) 