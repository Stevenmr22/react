import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O gano
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
        ){
        return boardToCheck[a] // x u o
        }
    }
    //si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // si hay un ganador o si no hay mas movimientos
    return newBoard.every((square) => square) // true si todos los cuadros estan ocupados
  }