import { poleInterface, pathInterface, kulkaInterface, usefulVariablesInterface } from "./interfaces";
export let usefulVariables: usefulVariablesInterface = {
    plansza: document.getElementById("plansza") as HTMLDivElement,
    boczneKulki: document.getElementById("containerKulki") as HTMLDivElement,
    punkciory: document.getElementById("pkt") as HTMLDivElement,
    colors: ["#FFFFFF", "#000000", "#fa05e1", "#0734fa", "#02f76d", "#f51d05", "#faf202"],
    kulki: [],
    path: [],
    pola: [],
    isPathFound: false,
    clicked: null,
    width: 9,
    height: 9,
    ruch: false,
    wylosowaneKulki: [],
    sameColorBalls: [],
    punkty: 0,
    added: false,
    zbite: false,
    orientacja: null,
    numberOfBalls: 0
}