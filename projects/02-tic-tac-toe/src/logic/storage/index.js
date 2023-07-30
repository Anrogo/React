export const saveGameStorage = ({board, turn}) => {

    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    localStorage.removeItem('turn');
    localStorage.removeItem('board');
}