const gameBoard = (function() {
    let board = ['', '', '', 
                 '', '', '', 
                 '', '', ''];

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

    function restart() {
        for (i = 0; i < board.length; i++){
            board[i] = ''
        }
    }

    function endGame() {
        const gameboard = document.querySelector('#container')
        if ((board[0] == 'X') && (board[1] == 'X') && (board[2] == 'X')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('X')
        } else if ((board[3] == 'X') && (board[4] == 'X') && (board[5] == 'X')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('X')
        } else if ((board[6] == 'X') && (board[7] == 'X') && (board[8] == 'X')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('X')
        } else if ((board[0] == 'X') && (board[3] == 'X') && (board[6] == 'X')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('X')
        } else if ((board[1] == 'X') && (board[4] == 'X') && (board[7] == 'X')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('X')
        } else if ((board[2] == 'X') && (board[5] == 'X') && (board[8] == 'X')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('X')
        } else if ((board[0] == 'X') && (board[4] == 'X') && (board[8] == 'X')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('X')
        } else if ((board[2] == 'X') && (board[4] == 'X') && (board[6] == 'X')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('X')
        } else if ((board[0] == 'O') && (board[1] == 'O') && (board[2] == 'O')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('O')
        } else if ((board[3] == 'O') && (board[4] == 'O') && (board[5] == 'O')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('O')
        } else if ((board[6] == 'O') && (board[7] == 'O') && (board[8] == 'O')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('O')
        } else if ((board[0] == 'O') && (board[3] == 'O') && (board[6] == 'O')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('O')
        } else if ((board[1] == 'O') && (board[4] == 'O') && (board[7] == 'O')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('O')
        } else if ((board[2] == 'O') && (board[5] == 'O') && (board[8] == 'O')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('O')
        } else if ((board[0] == 'O') && (board[4] == 'O') && (board[8] == 'O')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('O')
        } else if ((board[2] == 'O') && (board[4] == 'O') && (board[6] == 'O')){
            gameboard.style.pointerEvents = 'none';
            winner.winnerUser('O')
        } else if (board.includes('') == false){
            winner.winnerUser('tie')
            gameboard.style.pointerEvents = 'none';
        }
    }

    const addX = (x) => {
        if (board[x] != '') {
            alert('Invalid move')
        } else {
            board[x] = 'X'
        }
    }
    const addO = (x) => {
        if (board[x] != '') {
            alert('Invalid move')
        } else {
            board[x] = 'O'
        }
    }


    return {addX, addO, renderSymbols, endGame, restart}
})();


const player = function(name, id) {
    let playerName = name
    if (playerName == '' && id == 'playerOne') {
        playerName = 'Player One'
    } else if (playerName == '' && id == 'playerTwo') {
        playerName = 'Player Two'
    }
    const play = (x) => {
        if (id == 'playerOne'){
            gameBoard.addX(x)
        } else if (id == 'playerTwo'){
            gameBoard.addO(x)
        }    
    }
    
    return {playerName, play}
}



const game = function(name1, name2) {
    const fields = document.querySelectorAll('.field');
    const playerOne = player(name1, 'playerOne');
    const playerTwo = player(name2, 'playerTwo');
    let playerOneActive = false
    let playerTwoActive = true
    fields.forEach((field) => {
        field.addEventListener('click', () => {
            if (playerOneActive === false && field.innerText == '') {
                playerOneActive = true
                playerTwoActive = false
            } else if (playerOneActive === true && field.innerText == '') {
                playerOneActive = false
                playerTwoActive = true
            }
            playerOneActive ? playerOne.play(field.id) : playerTwo.play(field.id)
            gameBoard.renderSymbols()
            gameBoard.endGame()
        })
    }) 

    // To restart the current game
    const restart = (() => {
        const restart = document.querySelector('#restart');
        const gameboard = document.querySelector('#container')
        restart.addEventListener('click', () => {
            gameBoard.restart()
            gameBoard.renderSymbols()
            playerOneActive = false;
            playerTwoActive = true;
            gameboard.style.pointerEvents = 'all';
            winner.restartWinner()
        })
    })();
}

const begin = (() => {
    const start = document.querySelector('#start');
    const restart = document.querySelector('#restart');
    const field = document.querySelectorAll('.inactiveField')
    const playerOneFieldName = document.querySelector('#playerOneFieldName')
    const playerTwoFieldName = document.querySelector('#playerTwoFieldName')
    start.addEventListener('click', () => {
        const nameX = document.getElementById('playerOne')
        const nameO = document.getElementById('playerTwo')
        const playerOne = player(nameX.value, nameX.id)
        const playerTwo = player(nameO.value, nameO.id)
        playerOneFieldName.innerText = playerOne.playerName
        playerTwoFieldName.innerText = playerTwo.playerName
        start.classList.replace('btn', 'hide')
        restart.classList.replace('hide', 'btn')
        for (let i = 0; i < field.length; i++){
            field[i].classList.replace('inactiveField', 'field')
        }
        game(nameX, nameO)
    })   
})();

const winner = (() => {
    const winnerPlayerOne = document.querySelector('#winnerOne');
    const winnerPlayerTwo = document.querySelector('#winnerTwo');
    function winnerUser(x) {
        if (x === 'X') {
            winnerPlayerOne.classList.replace('winnerOff', 'winnerOn')
        } else if (x === 'O') {
            winnerPlayerTwo.classList.replace('winnerOff', 'winnerOn')
        } else if (x === 'tie') {
            winnerPlayerTwo.classList.replace('winnerOff', 'tie')
            winnerPlayerOne.classList.replace('winnerOff', 'tie')
        }
    }

    function restartWinner() {
        winnerPlayerOne.classList.replace('winnerOn', 'winnerOff')
        winnerPlayerTwo.classList.replace('winnerOn', 'winnerOff')
        winnerPlayerOne.classList.replace('tie', 'winnerOff')
        winnerPlayerTwo.classList.replace('tie', 'winnerOff')
    }

    return {winnerUser, restartWinner}
})()
