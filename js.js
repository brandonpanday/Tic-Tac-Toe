const Player = (id, name, symbol) => {
    let playedTiles = [];
    const getId = () => id;
    const getName = () => name;
    const getSymbol = () => symbol;
    return {playedTiles, getName, getId, getSymbol};
}

const displayController = (() => {
    const initializeBtns = (() => {
        let startBtn = document.querySelector('.startBtn');
        startBtn.addEventListener('click', event => {
            console.log("tileFnPvp()");
            tileFnPvp();
        })
        // let restartBtn = document.querySelector('.restartBtn');
        // restartBtn.addEventListener('click', event => {
        //     console.log("restartBtn fired");
        // })
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

    const removeTileFn = () => {
        let tiles = document.querySelectorAll('.tile');
        tiles.forEach(tile => {
            tile.removeEventListener('click', gameLogic.play);
        });
    }

    return { initializeBtns, loadBoard, tileFnPvp, removeTileFn }
})();

const gameLogic = (() => {

    let one = Player(1, "brandon", "x");
    let two = Player(2, "notBrandon", "o");


    let count = 1; // take input on who plays first to decide whether count % 2 

    const winningCombinations = [
        [1,2,3], [4,5,6], [7,8,9], // Horizontal
        [1,4,7], [2,5,8], [3,6,9], // Vertical
        [1,5,9], [3,5,7] // Diagonal
    ];

    const checkWin = (player) => {
        winningCombinations.forEach(combo => {
            for (let i = 0; i < combo.length; i++) {
                if (player.playedTiles.includes(combo[0]) && 
                    player.playedTiles.includes(combo[1]) && 
                    player.playedTiles.includes(combo[2]))
                {
                    alert(player.getSymbol() + " wins!");
                    displayController.removeTileFn();
                    break;
                }
            }
        })
    }
    // Put game logic here
    // take input assign to players array
    // check for win on assignment
    // set counter for odd and even 1 = player one plays / 2 = player 2 plays
    // Check if number already played (remove attribute)
    // if counter == 1 Player1.playedTiles.push(e) / if 2 Player2.tiles.push(num)
    // edit textcontent of tile player1.getSymbol() / PLayer 2 getSymbol
    // checkWin -> remove event listeners if win, disable start btn. Enable restart btn during play

    // how to assign plays to each player
    const play = (e) => {
        if (e.target.dataset.number != undefined) {
            if (count % 2 == 1) {
                e.target.textContent = one.getSymbol();
                one.playedTiles.push(parseInt(e.target.dataset.number));
                delete e.target.dataset.number;
                console.log(one.playedTiles);
                checkWin(one)
            }
            else if (count % 2 == 0) {
                e.target.textContent = two.getSymbol();
                two.playedTiles.push(parseInt(e.target.dataset.number));
                delete e.target.dataset.number;
                console.log(two.playedTiles);
                checkWin(two)
            }
            count ++;
        }
    }
    return { play, count };
})();

// Boards of Canada