const gameBoard = (function() {
    let board = [null, null, null, null, null, null, null, null, null];
    function renderSymbols() {
        let fields = document.querySelectorAll('.field')
        fields.forEach((field) => {
            for (i = 0; i < board.length; i++){
                if (field.id == i){
                    field.innerText = board[i]
                } 
            }
        })
    }
    const addX = (x) => {
        if (board[x] != null) {
            alert('Invalid move')
        } else {
            board[x] = 'X'
        }
    }
    const addO = (x) => {
        if (board[x] != null) {
            alert('Invalid move')
        } else {
            board[x] = 'O'
        }
    }


    return {addX, addO, renderSymbols, board}
})();


const player = function(name, id) {
    const playerName = name || 'Mysterious Player'
    const play = (x) => {
        if (id == 'playerOne'){
            gameBoard.addX(x)
        } else if (id == 'playerTwo'){
            gameBoard.addO(x)
        }    
    }
    
    return {playerName, play}
}


const game = function() {
    const fields = document.querySelectorAll('.field');
    const lindo = player('Lindo', 'playerOne');
    const feio = player('Feio', 'playerTwo');
    let lindoActive = true
    let feioActive = false
    fields.forEach((field) => {
        field.addEventListener('click', () => {
            if (lindoActive === true && field.innerText == '') {
                lindoActive = false
                feioActive = true
            } else if (lindoActive === false && field.innerText == '') {
                lindoActive = true
                feioActive = false
            }
            lindoActive ? lindo.play(field.id) : feio.play(field.id)
            console.log(gameBoard.board)
            gameBoard.renderSymbols()
        })
    })
}

game()         