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

    neighbours(Cell) {
        //créer un tableau qui contient les voisins
        let voisins = [];
        //déterminer la position des murs (true ou false)
        //déterminer la nouvelle position de la cellule en fonction des murs
        //-> si pas de mur
        //->pousser les nouvelles positions dans neighbours
        if (!cell.walls[0]) {  // mur du haut         
            voisins.push(this.get_cell(cell.posX, cell.posY - 1));
        }
        if (!cell.walls[1]) {  // mur du droite        
            voisins.push(this.get_cell(cell.posX + 1, cell.posY));
        }
        if (!cell.walls[2]) {  // mur du bas        
            voisins.push(this.get_cell(cell.posX, cell.posY + 1));
        }
        if (!cell.walls[3]) {  // mur du gauche        
            voisins.push(this.get_cell(cell.posX - 1, cell.posY));
        }
        //retourner le tableau neighbours rempli
        return voisins;
    }

    get_cell(x, y) {
        return this.lab.find(c => (c.posX == x && c.posY == y))
    }

    //déterminer les voisins accéssibles, par rapport aux murs





    //BFS (G, s) // G = labyrinthe et s = départ
    bfs(lab, start) {
        //→ let Q be queue. //créer une variable Q
        let Q = new Queue();
        //→ add s to the queue.
        Q.addQueue(start);
        //→ mark s as visited.
        let visited = [];
        visited.push(start);
        //while ( Q is not empty )
        while (!Q.isEmpty()) {
            //→ get next element waiting in the queue, called v, and
            //remove it from the queue
            let v = Q.deleteQueue();
            //→ if v is winning, return v
            if (v.winning()) {
                return v;
            }
            //for all neighbours w of v in Graph G
            let w = neighbours
            //if w is not visited

            //→ add w to the queue

            //→ mark w as visited.

            //→ return false

        }

    }

}
