import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    //revisamos todas combinaciones ganadoras para ver si X u O ganaron
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] && //0 -> x u o
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    //Si no hay ganador aún
    return null
}

export const checkEndGame = (newBoard) => {
    //revisamos si hay un empate cuando no haya más espacios vacíos en el tablero
    return newBoard.every((square) => square !== null)
}