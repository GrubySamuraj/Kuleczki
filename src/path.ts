import { poleInterface, pathInterface, kulkaInterface } from "./interfaces";
import { usefulVariables } from "./usefulVariables";
import { board } from "./index";
export class PathFunctions {
    liczOdl(FirstItem: poleInterface, LastItem: HTMLDivElement, tabID: string[][][]) {
        if (LastItem.getAttribute("kulka") === "true") {
            let id = LastItem.getAttribute("idkulki")?.split("_") as string[];
            let x = parseInt(id[0]);
            let y = parseInt(id[1]);
            LastItem = usefulVariables.pola[x][y].div;
        }
        let x = parseInt(FirstItem.div.getAttribute("col"));
        let y = parseInt(FirstItem.div.getAttribute("row"));
        if (FirstItem.div == LastItem) {
            this.Dodaj(FirstItem, usefulVariables.pola[x][y]);
            usefulVariables.path.push(FirstItem);
            usefulVariables.isPathFound = true;
        }
        if (!usefulVariables.isPathFound) {
            if (usefulVariables.pola[x - 1]?.[y] && usefulVariables.pola[x - 1]?.[y].isblocked == false && usefulVariables.pola[x - 1]?.[y].iskulka == false) {
                tabID[x - 1][y].push(...tabID[x][y], usefulVariables.pola[x][y].id);
                this.Dodaj(usefulVariables.pola[x - 1][y], usefulVariables.pola[x][y]);
                window.setTimeout(() => {
                    this.liczOdl(usefulVariables.pola[x - 1][y], LastItem, tabID);
                }, 1)
            }
            if (usefulVariables.pola[x + 1]?.[y] && usefulVariables.pola[x + 1]?.[y].isblocked == false && usefulVariables.pola[x + 1]?.[y].iskulka == false) {
                tabID[x + 1][y].push(...tabID[x][y], usefulVariables.pola[x][y].id);
                this.Dodaj(usefulVariables.pola[x + 1][y], usefulVariables.pola[x][y]);
                window.setTimeout(() => {
                    this.liczOdl(usefulVariables.pola[x + 1][y], LastItem, tabID);
                }, 1)
            }
            if (usefulVariables.pola[x]?.[y + 1] && usefulVariables.pola[x]?.[y + 1].isblocked == false && usefulVariables.pola[x]?.[y + 1].iskulka == false) {
                tabID[x][y + 1].push(...tabID[x][y], usefulVariables.pola[x][y].id);
                this.Dodaj(usefulVariables.pola[x][y + 1], usefulVariables.pola[x][y]);
                window.setTimeout(() => {
                    this.liczOdl(usefulVariables.pola[x][y + 1], LastItem, tabID)
                }, 1)
            }
            if (usefulVariables.pola[x]?.[y - 1] && usefulVariables.pola[x]?.[y - 1].isblocked == false && usefulVariables.pola[x]?.[y - 1].iskulka == false) {
                tabID[x][y - 1].push(...tabID[x][y], usefulVariables.pola[x][y].id);
                this.Dodaj(usefulVariables.pola[x][y - 1], usefulVariables.pola[x][y]);
                window.setTimeout(() => {
                    this.liczOdl(usefulVariables.pola[x][y - 1], LastItem, tabID);
                }, 1)
            }
        }
        else {
            if (LastItem == usefulVariables.pola[x][y].div) {
                LastItem.style.backgroundColor = "red";
                let posx = LastItem.getAttribute("col") as string;
                let posy = LastItem.getAttribute("row") as string;
                this.showPath(parseInt(posx), parseInt(posy), tabID);
            }
        }
    }
    showPath(x: number, y: number, tabID: string[][][]) {
        tabID[x][y].forEach(id => {
            let posx = parseInt(id.split("_")[0]);
            let posy = parseInt(id.split("_")[1]);
            usefulVariables.path.push(usefulVariables.pola[posx][posy]);
            usefulVariables.pola[posx][posy].div.style.backgroundColor = "red";
        });
    }
    clickDiv(div: HTMLDivElement, pola: poleInterface[][], target: HTMLDivElement) {
        if (!usefulVariables.ruch) {
            let x = div.getAttribute("col") as string;
            let y = div.getAttribute("row") as string;
            let obj = pola[parseInt(x)][parseInt(y)];
            let kulka = obj.kulka as HTMLDivElement;
            if (obj.iskulka) {
                if (obj.clicked) {
                    //odznaczenie kulki
                    let x = parseInt(kulka.getAttribute("idkulki").split("_")[0]);
                    let y = parseInt(kulka.getAttribute("idkulki").split("_")[1]);
                    pola[x][y].div.style.backgroundColor = "transparent";
                    this.unFocus(kulka);
                }
                else if (kulka != usefulVariables.clicked && usefulVariables.clicked != null) {
                    //przeskok z jednej kulki do drugiej
                    this.unFocus(usefulVariables.clicked);
                    this.Focus(kulka, obj, pola);
                }
                else {
                    //zaznaczenie kulki
                    this.Focus(kulka, obj, pola);
                }
            }
            else {
                if (usefulVariables.clicked) {
                    if (usefulVariables.path.filter(item => {
                        return item.div == target;
                    }).length != 0) {
                        //Przemieszczenie
                        this.ruch(usefulVariables.clicked, target);
                    }
                }
            }
        }
    }
    Dodaj(pole: poleInterface, poprzedni: poleInterface) {
        pole.number = poprzedni.number + 1;
        pole.isblocked = true;
    }
    clearTable() {
        let tabID: [][][] = [];
        for (let x = 0; x < usefulVariables.width; x++) {
            tabID.push([]);
            for (let y = 0; y < usefulVariables.height; y++) {
                tabID[x].push([]);
            }
        }
        return tabID;
    }
    unFocus(kulka: HTMLDivElement) {
        kulka.style.width = "25px";
        kulka.style.height = "25px";
        let idx = parseInt(usefulVariables.clicked?.getAttribute("idKulki")?.split("_")[0] as string);
        let idy = parseInt(usefulVariables.clicked?.getAttribute("idKulki")?.split("_")[1] as string);
        usefulVariables.pola[idx][idy].clicked = false;
        usefulVariables.clicked = null;
    }
    Focus(kulka: HTMLDivElement, obj: poleInterface, pola: poleInterface[][]) {
        kulka.style.width = "30px";
        kulka.style.height = "30px";
        obj.clicked = true;
        usefulVariables.clicked = kulka;
        for (let x = 0; x < pola.length; x++) {
            for (let y = 0; y < pola[x].length; y++) {
                pola[x][y].div.onmouseover = (e) => {
                    if (usefulVariables.clicked) {
                        let tabID = this.clearTable();
                        this.clearPath();
                        this.liczOdl(obj, e.target as HTMLDivElement, tabID);
                    }
                };
            }
        }
    }
    ruch(source: HTMLDivElement, destination: HTMLDivElement) {
        usefulVariables.ruch = true;
        let fx = source.getAttribute("idkulki").split("_")[0];
        let fy = source.getAttribute("idkulki").split("_")[1];

        usefulVariables.pola[parseInt(fx)][parseInt(fy)].iskulka = false;
        usefulVariables.pola[parseInt(fx)][parseInt(fy)].kulka = null;
        let temp = usefulVariables.kulki[parseInt(fx)][parseInt(fy)];
        usefulVariables.kulki[parseInt(fx)][parseInt(fy)] = {
            color: "",
            colorID: -1,
            div: null
        };

        let dx = parseInt(destination.getAttribute("col"));
        let dy = parseInt(destination.getAttribute("row"));

        usefulVariables.pola[dx][dy].iskulka = true;
        usefulVariables.pola[dx][dy].kulka = source;
        usefulVariables.pola[dx][dy].div.appendChild(source);
        usefulVariables.kulki[dx][dy] = temp;

        source.setAttribute("idkulki", `${dx}_${dy}`);
        this.showCommitedPath()
        this.unFocus(source);
        window.setTimeout(() => {
            usefulVariables.ruch = false;
            this.clearPath();
            board.losuj(usefulVariables.wylosowaneKulki);
            board.LosujBoczneKulki();
            usefulVariables.sameColorBalls = [];
            usefulVariables.added = false;
            usefulVariables.orientacja = null;
            this.zbijanie(source);
        }, 1000);
    }
    clearPath() {
        usefulVariables.isPathFound = false;
        usefulVariables.pola.forEach((item) => {
            item.forEach((item2) => {
                item2.isblocked = false;
                item2.div.style.backgroundColor = "transparent";
                item2.number = 0;
            })
        }, 1);
        usefulVariables.path = [];
    }
    showCommitedPath() {
        usefulVariables.path.map((item) => {
            item.div.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        })
    }
    zbijanie(kulka: HTMLDivElement) {
        console.log(kulka);
        if (kulka) {
            let posx = parseInt(kulka.getAttribute("idkulki").split("_")[0]);
            let posy = parseInt(kulka.getAttribute("idkulki").split("_")[1]);
            console.log(usefulVariables.orientacja);
            // ponizej
            if (usefulVariables.kulki[posx + 1]?.[posy] && !usefulVariables.sameColorBalls.includes(usefulVariables.kulki[posx + 1][posy]) && usefulVariables.kulki[posx + 1][posy].colorID == usefulVariables.kulki[posx][posy].colorID && (usefulVariables.orientacja === "pionowe" || usefulVariables.orientacja === null)) {
                usefulVariables.sameColorBalls.push(usefulVariables.kulki[posx + 1][posy]);
                usefulVariables.orientacja = "pionowe";
                this.zbijanie(usefulVariables.kulki[posx + 1][posy].div);
            }
            // powyżej
            if (usefulVariables.kulki[posx - 1]?.[posy] && !usefulVariables.sameColorBalls.includes(usefulVariables.kulki[posx - 1][posy]) && usefulVariables.kulki[posx - 1][posy].colorID == usefulVariables.kulki[posx][posy].colorID && (usefulVariables.orientacja === "pionowe" || usefulVariables.orientacja === null)) {
                usefulVariables.sameColorBalls.push(usefulVariables.kulki[posx - 1][posy]);
                usefulVariables.orientacja = "pionowe";
                this.zbijanie(usefulVariables.kulki[posx - 1][posy].div);
            }
            // po prawej
            if (usefulVariables.kulki[posx]?.[posy + 1] && !usefulVariables.sameColorBalls.includes(usefulVariables.kulki[posx][posy + 1]) && usefulVariables.kulki[posx][posy + 1].colorID == usefulVariables.kulki[posx][posy].colorID && (usefulVariables.orientacja === "poziome" || usefulVariables.orientacja === null)) {
                usefulVariables.sameColorBalls.push(usefulVariables.kulki[posx][posy + 1]);
                usefulVariables.orientacja = "poziome";
                this.zbijanie(usefulVariables.kulki[posx][posy + 1].div);
            }
            // po lewej
            if (usefulVariables.kulki[posx]?.[posy - 1] && !usefulVariables.sameColorBalls.includes(usefulVariables.kulki[posx][posy - 1]) && usefulVariables.kulki[posx][posy - 1].colorID == usefulVariables.kulki[posx][posy].colorID && (usefulVariables.orientacja === "poziome" || usefulVariables.orientacja === null)) {
                usefulVariables.sameColorBalls.push(usefulVariables.kulki[posx][posy - 1]);
                usefulVariables.orientacja = "poziome";
                this.zbijanie(usefulVariables.kulki[posx][posy - 1].div);
            }
            //lewy górny
            if (usefulVariables.kulki[posx - 1]?.[posy - 1] && !usefulVariables.sameColorBalls.includes(usefulVariables.kulki[posx - 1][posy - 1]) && usefulVariables.kulki[posx - 1][posy - 1].colorID == usefulVariables.kulki[posx][posy].colorID && (usefulVariables.orientacja === "pionPrawo" || usefulVariables.orientacja === null)) {
                usefulVariables.sameColorBalls.push(usefulVariables.kulki[posx - 1][posy - 1]);
                usefulVariables.orientacja = "pionPrawo";
                this.zbijanie(usefulVariables.kulki[posx - 1][posy - 1].div);
            }
            //prawy dolny
            if (usefulVariables.kulki[posx + 1]?.[posy + 1] && !usefulVariables.sameColorBalls.includes(usefulVariables.kulki[posx + 1][posy + 1]) && usefulVariables.kulki[posx + 1][posy + 1].colorID == usefulVariables.kulki[posx][posy].colorID && (usefulVariables.orientacja === "pionPrawo" || usefulVariables.orientacja === null)) {
                usefulVariables.sameColorBalls.push(usefulVariables.kulki[posx + 1][posy + 1]);
                usefulVariables.orientacja = "pionPrawo";
                this.zbijanie(usefulVariables.kulki[posx + 1][posy + 1].div);
            }
            //lewy dolny
            if (usefulVariables.kulki[posx + 1]?.[posy - 1] && !usefulVariables.sameColorBalls.includes(usefulVariables.kulki[posx + 1][posy - 1]) && usefulVariables.kulki[posx + 1][posy - 1].colorID == usefulVariables.kulki[posx][posy].colorID && (usefulVariables.orientacja === "pionLewo" || usefulVariables.orientacja === null)) {
                usefulVariables.sameColorBalls.push(usefulVariables.kulki[posx + 1][posy - 1]);
                usefulVariables.orientacja = "pionLewo";
                this.zbijanie(usefulVariables.kulki[posx + 1][posy - 1].div);
            }
            //prawy górny
            if (usefulVariables.kulki[posx - 1]?.[posy + 1] && !usefulVariables.sameColorBalls.includes(usefulVariables.kulki[posx - 1][posy + 1]) && usefulVariables.kulki[posx - 1][posy + 1].colorID == usefulVariables.kulki[posx][posy].colorID && (usefulVariables.orientacja === "pionLewo" || usefulVariables.orientacja === null)) {
                usefulVariables.sameColorBalls.push(usefulVariables.kulki[posx - 1][posy + 1]);
                usefulVariables.orientacja = "pionLewo";
                this.zbijanie(usefulVariables.kulki[posx - 1][posy + 1].div);
            }
            //created by Jakub Dragosz
            if (usefulVariables.sameColorBalls.length >= 5 && !usefulVariables.added) {
                console.log(usefulVariables.sameColorBalls);
                usefulVariables.sameColorBalls.map(item => {
                    let x = parseInt(item.div.getAttribute("idkulki").split("_")[0]);
                    let y = parseInt(item.div.getAttribute("idkulki").split("_")[1]);
                    usefulVariables.pola[x][y].iskulka = false;
                    usefulVariables.pola[x][y].kulka = null;
                    usefulVariables.kulki[x][y] = {
                        color: "",
                        colorID: -1,
                        div: null
                    };
                    item.div.remove();
                    usefulVariables.punkty++;
                    usefulVariables.numberOfBalls--;
                    usefulVariables.punkciory.innerHTML = usefulVariables.punkty.toString();
                });
                usefulVariables.added = true;
            }
        }
    }
}