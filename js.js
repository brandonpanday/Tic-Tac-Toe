
const gameBoard = () => {
    let gameTiles = [1,2,3,4,5,6,7,8,9];

    const loadBoard = () => {
        let grid = document.createElement('div');
        grid.setAttribute('class', 'gameContainer');
        
        let container = document.querySelector('.container');
        container.append(grid);
        let i = 1;
        gameTiles.forEach(item => {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'tile');
            tile.setAttribute('data-number', i);
            tile.addEventListener('click', event=> {
                let selectedTile = event.target;
                if (selectedTile.hasAttribute('data-number')) {
                    a.addPlay(selectedTile.dataset.number);
                    selectedTile.textContent = "X";
                    delete selectedTile.dataset.number;
                    console.log(selectedTile);
                }
                else {
                    console.log("no data attribute'")
                }
            })
            grid.append(tile);
            i++;
        })
    }
    return {loadBoard};
}

const game = () => {
    const winningCombinations = [
        [1,2,3], [4,5,6], [7,8,9], // Horizontal
        [1,4,7], [2,5,8], [3,6,9], // Vertical
        [1,5,9], [3,5,7] // Diagonal
    ];

    const checkWin = ({player}) => {
        winningCombinations.forEach(combination => {
            
        })
    }

}

const Player = (id, name) => {
    let plays = [];
    const getId = () => id;
    const getName = () => name;
    const addPlay = (x) => {
        plays.push(x);
        console.log(plays);
    }
    return {getName, getId, addPlay};
}

let a = Player("x", "player one");
let b = Player("o", "player two");

let gb = gameBoard();
gb.loadBoard();


