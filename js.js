const Player = (id, name, symbol) => {
    let plays = [];
    const getId = () => id;
    const getName = () => name;
    const getSymbol = () => symbol;
    return {getName, getId, getSymbol};
}

const gameBoard = () => {
    let choice;

    const initializeBtns = (() => {
        let startBtn = document.querySelector('.startBtn');
        startBtn.addEventListener('click', event => {
            console.log("gameBoard.loadBoard fired");
            loadBoard();
        })
        console.log("buttons initialized");
    })();




    const loadBoard = () => {
        let gameTiles = [1,2,3,4,5,6,7,8,9];
        let grid = document.createElement('div');
        grid.setAttribute('class', 'gameContainer');
        
        let container = document.querySelector('.container');
        container.append(grid);
        gameTiles.forEach(item => {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'tile');
            tile.setAttribute('data-number', item);
            tile.addEventListener('click', gameLogic.pvp);
            grid.append(tile);
        })
    }



    return {loadBoard, choice, initializeBtns};
}

const gameLogic = (() => {

    const winningCombinations = [
        [1,2,3], [4,5,6], [7,8,9], // Horizontal
        [1,4,7], [2,5,8], [3,6,9], // Vertical
        [1,5,9], [3,5,7] // Diagonal
    ];

    const isPicked = (Player, i) => {
        let x = true;
        let player = Player.plays;
        player.forEach(num => {
            if (num == i) {
                x = false;
            }
        })
        return x;
    }
    
    const checkWin = (Player) => {
        let x = false;
        if (Player.plays.length >= 3) {
            for (let combo of winningCombinations) {
                let i = 0;
                for (let num of combo) {
                    if (Player.plays.includes(num)) {
                        i++;
                        if (i == 3) {
                            x = true;
                            break;
                        }
                    }
                }
            }
        }
        return x;
    }

    let pvp = (e) => {
        choice = e.target.dataset.number;
        console.log(choice);
        let isAvail = isPicked(a, choice);
        if (isAvail) {
            a.plays.push(choice);
            console.log(a.plays);
        }
    }


    return {winningCombinations, isPicked, checkWin, pvp} ;
})();

let a = Player(1, "player one", "x");
a.plays = [1,2,3];
let gb = gameBoard();