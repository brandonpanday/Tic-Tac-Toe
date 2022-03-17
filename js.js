const Player = (id, name, symbol) => {
    let playedTiles = [];
    const getId = () => id;
    const getName = () => name;
    const getSymbol = () => symbol;
    return {playedTiles, getName, getId, getSymbol};
}

let one = Player(1, "brandon", "x");
let two = Player(2, "panday", "o");

const displayController = (() => {
    const initializeBtns = (() => {
        let startBtn = document.querySelector('.startBtn');
        startBtn.addEventListener('click', event => {
            console.log("tileFnPvp()");
            tileFnPvp();
        })
        let restartBtn = document.querySelector('.restartBtn');
        restartBtn.addEventListener('click', event => {
            console.log("restartBtn fired");
        })
    })();

    const loadBoard = (() => {
        let gameTiles = [1,2,3,4,5,6,7,8,9];
        let grid = document.createElement('div');
        grid.setAttribute('class', 'gameContainer');
        
        let container = document.querySelector('.container');
        container.append(grid);
        gameTiles.forEach(item => {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'tile');
            tile.setAttribute('data-number', item);
            grid.append(tile);
        })
    })();

    const tileFnPvp = () => {
        let tiles = document.querySelectorAll('.tile');
        tiles.forEach(tile => {
            tile.addEventListener('click', gameLogic.play);
        });
    }

    return { initializeBtns, loadBoard, tileFnPvp }
})();

const gameLogic = (() => {
    const winningCombinations = [
        [1,2,3], [4,5,6], [7,8,9], // Horizontal
        [1,4,7], [2,5,8], [3,6,9], // Vertical
        [1,5,9], [3,5,7] // Diagonal
    ];

    // Put game logic here
    // take input assign to players array
    // check for win on assignment
    // set counter for odd and even 1 = player one plays / 2 = player 2 plays
    // Check if number already played (remove attribute)
    // if counter == 1 Player1.playedTiles.push(e) / if 2 Player2.tiles.push(num)
    // edit textcontent of tile player1.getSymbol() / PLayer 2 getSymbol
    // checkWin -> remove event listeners if win, disable start btn. Enable restart btn during play

    const play = (e) => {
        if (e.target.dataset.number != undefined) {
            one.playedTiles.push(e.target.dataset.number);
            delete e.target.dataset.number;
            console.log(one.playedTiles);
        }
    }
    return { play };

})();

// Boards of Canada