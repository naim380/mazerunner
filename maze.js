class Maze {
    constructor(taille,exemple){
        // this.lab = lab.map(cell_desc => new Cell(cell_desc.posX, cell_desc.posY, cell_desc.walls));
        this.lab = data[taille][exemple];
    }
    display(){
        let tall = 50
        for(let i = 0; i < this.lab.length; i++){
            let walls_str = this.lab[i].walls;
            let murs = walls_str.map(x => x ? "2px" : "0px").join(" ");
            let posX = this.lab[i].posX;
            let posY = this.lab[i].posY;
            console.log(murs);
            let carre = new Cell(posX, posY, murs,this.lab);
            carre.display();
        let size_maze = Math.sqrt(this.lab.length)*tall;
        $(`#container`).css({'width':size_maze, 'height':size_maze});
        // this.lab.forEach(cell => {
        //     let cell_object = new Cell(cell_description);
        // });

    }

    }
}

