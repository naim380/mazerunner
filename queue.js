class Queue {
    constructor() {
        this.container = []
    }

    display() {
        console.log(this.container)
    }

    // Méthode d'ajoute un élément à la fin de la file d'attente.
    addQueue(element) {
        this.container.push(element);
    }

    // Méthode supprime un élément du début de la file d'attente.
    deleteQueue() {
        return this.container.shift()
    }

    // Méthode vérifie si une file d'attente est vide en vérifiant en fonction de la taille du tableau
    isEmpty() {
        return this.container.length === 0;
    }
}
