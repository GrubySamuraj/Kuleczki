import { PathFunctions } from "./path";
import { poleInterface } from "./interfaces";
import { usefulVariables } from "./usefulVariables";
let pathClass = new PathFunctions();
export class Board {
    private readonly width:number
    private readonly height:number
    constructor(){
        this.width = 9;
        this.height = 9;
    }
    create() {
        for (let x: number = 0; x <  this.width; x++) {
            usefulVariables.pola.push([]);
            usefulVariables.kulki.push([]);
            for (let y: number = 0; y < this.height; y++) {
                usefulVariables.kulki[x].push(0);
                let div: HTMLDivElement = document.createElement("div");
                div.classList.add("klocek");
                div.setAttribute("col", x.toString());
                div.setAttribute("row", y.toString());
                usefulVariables.plansza.appendChild(div);
                let pole: poleInterface = {
                    col: x,
                    row: y,
                    isblocked: false,
                    number: 0,
                    div: div,
                    isset: true,
                    id: `${x}_${y}`,
                    iskulka: false
                }
                div.addEventListener("click", function (e) {
                    pathClass.clickDiv(pole.div, usefulVariables.pola,e.target as HTMLDivElement);
                });
                usefulVariables.pola[x].push(pole)
                if (y == usefulVariables.width - 1) {
                    let br = document.createElement("br");
                    usefulVariables.plansza.appendChild(br);
                }
            }
        }
        // console.log(tableID);
        this.losuj(usefulVariables.pola);
    }
    losuj(pola: poleInterface[][]) {
        let losowe = 3;
        for (let x = 0; x < losowe; x++) {
            let kulka = document.createElement("div");
            let randomColorID = Math.floor(Math.random() * 7)
            let randomColor = usefulVariables.colors[randomColorID];
            kulka.classList.add("kulka");
            kulka.style.backgroundColor = randomColor;
            let randomX = Math.floor(Math.random() * pola.length);
            let randomY = Math.floor(Math.random() * pola[randomX].length);
            kulka.setAttribute("idKulki", `${randomX.toString()}_${randomY.toString()}`);
            kulka.setAttribute("kulka", "true");
            pola[randomX][randomY].iskulka = true;
            pola[randomX][randomY].clicked = false;
            if (pola[randomX][randomY].isblocked === false) {
                usefulVariables.kulki[randomX][randomY] = {
                    color: randomColor,
                    colorID: randomColorID
                }
                pola[randomX][randomY].div.appendChild(kulka);
                pola[randomX][randomY].kulka = kulka;
            }
            else {
                x--;
            }
        }
    }
}