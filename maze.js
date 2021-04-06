class Maze {
    constructor(taille, exemple) {
        // this.lab = lab.map(cell_desc => new Cell(cell_desc.posX, cell_desc.posY, cell_desc.walls));
        this.lab = data[taille][exemple];
        this.labCells = [];
    }
    display() {
        let tall = 50
        for (let i = 0; i < this.lab.length; i++) {
            let walls_str = this.lab[i].walls;
            let walls = walls_str.map(x => x ? "2px" : "0px").join(" ");
            let posX = this.lab[i].posX;
            let posY = this.lab[i].posY;
            console.log(walls);
            let item = new Cell(posX, posY, walls, this.lab, walls_str[0], walls_str[1], walls_str[2], walls_str[3]);
            this.labCells.push(item);
            item.display();
            let size_maze = Math.sqrt(this.lab.length) * tall;
            $(`#container`).css({ 'width': size_maze, 'height': size_maze });
        }

    }
}

