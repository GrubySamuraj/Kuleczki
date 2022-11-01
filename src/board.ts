import { PathFunctions } from "./path";
import { kulkaInterface, poleInterface } from "./interfaces";
import { usefulVariables } from "./usefulVariables";
let pathClass = new PathFunctions();
export class Board {
    private readonly width: number
    private readonly height: number
    private readonly iloscKul: number
    constructor() {
        this.width = 9;
        this.height = 9;
        this.iloscKul = 3;
    }
    create() {
        for (let x: number = 0; x < this.width; x++) {
            usefulVariables.pola.push([]);
            usefulVariables.kulki.push([]);
            for (let y: number = 0; y < this.height; y++) {
                usefulVariables.kulki[x].push({
                    color: "",
                    colorID: -1,
                    div: null
                });
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
                    pathClass.clickDiv(pole.div, usefulVariables.pola, e.target as HTMLDivElement);
                });
                usefulVariables.pola[x].push(pole)
                if (y == usefulVariables.width - 1) {
                    let br = document.createElement("br");
                    usefulVariables.plansza.appendChild(br);
                }
            }
        }
        let kulki: kulkaInterface[] = [];
        for (let x = 0; x < this.iloscKul; x++) {
            let kulka = this.LosujKulki();
            kulki.push(kulka);
        }
        this.LosujBoczneKulki();
        this.losuj(kulki);
    }
    losuj(kulki: kulkaInterface[]) {
        if (usefulVariables.numberOfBalls + kulki.length < usefulVariables.width * usefulVariables.height) {
            for (let x = 0; x < kulki.length; x++) {
                let kulka = kulki[x];
                let randomX = Math.floor(Math.random() * usefulVariables.pola.length);
                let randomY = Math.floor(Math.random() * usefulVariables.pola[randomX].length);
                kulka.div.setAttribute("idKulki", `${randomX.toString()}_${randomY.toString()}`);
                kulka.div.setAttribute("kulka", "true");
                if (usefulVariables.pola[randomX][randomY].iskulka === false) {
                    usefulVariables.pola[randomX][randomY].iskulka = true;
                    usefulVariables.pola[randomX][randomY].clicked = false;
                    usefulVariables.kulki[randomX][randomY] = {
                        color: kulka.color,
                        colorID: kulka.colorID,
                        div: kulka.div
                    }
                    usefulVariables.numberOfBalls++;
                    usefulVariables.pola[randomX][randomY].div.appendChild(kulka.div);
                    usefulVariables.pola[randomX][randomY].kulka = kulka.div;
                }
                else {
                    x--;
                }
            }
        }
        else {
            this.KoniecGry();
        }
    }
    LosujKulki() {
        let kulka = document.createElement("div");
        let randomColorID = Math.floor(Math.random() * usefulVariables.colors.length);
        let randomColor = usefulVariables.colors[randomColorID];
        kulka.classList.add("kulka");
        kulka.style.backgroundColor = randomColor;
        return {
            color: randomColor,
            colorID: randomColorID,
            div: kulka
        }
    }
    LosujBoczneKulki() {
        usefulVariables.wylosowaneKulki = [];
        for (let x = 0; x < this.iloscKul; x++) {
            let kulka = this.LosujKulki();
            usefulVariables.boczneKulki.appendChild(kulka.div);
            usefulVariables.wylosowaneKulki.push(kulka);
        }
        console.log(usefulVariables.wylosowaneKulki);
    }
    KoniecGry() {
        let body = document.getElementsByTagName("body")[0];
        let div = document.createElement("div");
        div.setAttribute("id", "endGame");
        div.innerHTML = "Koniec gry<br />";
        div.innerHTML += `Ilość punktów: ${usefulVariables.punkty}`;
        div.innerHTML += `<br/> <img src="./gfx/like.jpg" alt="like" /><br/>`;
        div.innerHTML += `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Jak zobaczyć `;
        body.appendChild(div);
    }
}
export { pathClass }