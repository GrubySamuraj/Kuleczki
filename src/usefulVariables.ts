import { poleInterface, pathInterface, kulkaInterface,usefulVariablesInterface } from "./interfaces";
export let usefulVariables: usefulVariablesInterface = {
    plansza: document.getElementById("plansza") as HTMLDivElement,
    colors: ["#FFFFFF", "#000000", "#fa05e1", "#0734fa", "#02f76d", "#f51d05", "#faf202","rgb(25,255,0)"],
    kulki: [],
    path: [],
    pola: [],
    isPathFound: false,
    clicked: null,
    width: 9,
    height: 9,
    ruch:false
}