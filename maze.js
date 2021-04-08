class Maze {
    constructor(taille, exemple) {
        // this.lab = lab.map(cell_desc => new Cell(cell_desc.posX, cell_desc.posY, cell_desc.walls));
        this.lab = data[taille][exemple];
        this.labCells = [];
    }
    display() {
        let tall = 50;
        let size_maze = Math.sqrt(this.lab.length) * tall;
        for (let i = 0; i < this.lab.length; i++) {
            let walls_str = this.lab[i].walls;
            let walls = walls_str.map(x => x ? "2px" : "0px").join(" ");
            let posX = this.lab[i].posX;
            let posY = this.lab[i].posY;
            console.log(walls);
            let item = new Cell(posX, posY, walls, this.lab, ...walls_str);
            this.labCells.push(item);
            item.display();            
            $(`#container`).css({ 'width': size_maze, 'height': size_maze });
        }
    }
}

BFS (G, s) // G = labyrinthe et s = départ
→ let Q be queue. //créer une variable Q 
→ add s to the queue.
→ mark s as visited.
while ( Q is not empty )
→ get next element waiting in the queue, called v, and
remove it from the queue
→ if v is winning, return v
for all neighbours w of v in Graph G
if w is not visited
→ add w to the queue
→ mark w as visited.
→ return false