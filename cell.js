class Cell {
    constructor(posX, posY, murs, lab, murHaut, murDroite, murBas, murGauche) {
        this.posX = posX;
        this.posY = posY;
        this.murs = murs;
        this.lab = lab;
        this.murHaut = murHaut;
        this.murDroite = murDroite;
        this.murBas = murBas;
        this.murGauche = murGauche;
        this.posEnd = Math.sqrt(this.lab.length) - 1;
    }

    display() {
        let className = `carre-${this.posX}-${this.posY}`;
        // let walls_str = this.walls.map(elt => elt ? "1px":"0px").join(" ");
        $("#container").append(`<div class = ${className}></div>`);
        $(`.${className}`).css("border", "solid grey");
        $(`.${className}`).css("border-width", this.murs);

        if (this.posX === 0 && this.posY === 0) {

            $(`.${className}`).css("background-color", "blue grey").html("Start")
        }
        if (this.posX === this.posEnd && this.posY === this.posEnd) {

            $(`.${className}`).css("background-color", "red").html("Goal")
        }
    }
    winning() {
        return (this.posX === this.posEnd && this.posY === this.posEnd);
    }
}
