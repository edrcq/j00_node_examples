/*
    1) On vous donne un robot qui est sur une grille, en position (0,0,N) 
    2) grille de 10 cases x/y
    3) directions: N/E/S/W 
    4) Actions possibles:
        - Rotation Gauche / Rotation Droite (L / R)
        - Se deplacer de 1 case (move / M)
    5) Les commandes sont recues via une chaine de caracteres "RMMRMM"
    6) RMMLM - la nouvelle du robot est (2,1,N)
    7) MMMMMMMMMM - revient a son point de depart (0,0,N)
*/

class MarsBot {
    constructor(grid = { x: 10, y: 10 }) {
        this.grid = grid
    }

    Execute(command = "") {

    }
}

// exemple d'utilisation
const myBot = new MarsBot(grid)
console.log(myBot)
myBot.Execute('MMMMMMMMMM')
console.log(myBot)