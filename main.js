function getRandomLaby(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomCase = '' + getRandomLaby(3, 25) + ''
const randomEx = 'ex-' + getRandomLaby(0, 2) + ''

let labyrinthe = new Maze (randomCase,randomEx);
labyrinthe.display();
labyrinthe.labCells;
console.log(labyrinthe.labCells);