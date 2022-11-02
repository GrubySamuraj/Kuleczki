import { poleInterface, kulkaInterface, usefulVariablesInterface } from "./interfaces";
/**
 * @module usefulVariables - moduł, który zawiera przydatne zmienne
 */
/**
 *  @param plansza: div z planszą główną
    @param boczneKulki: div z kontenerem obok na wylosowane kulki,
    @param punkciory: div z punktami,
    @param colors: możliwe do wylosowania kolory,
    @param kulki: array dwuwymiarowy ze wszystkimi kulkami lub fake-kulkami (kulki o id=-1 co oznacza ze nie ma tam kulki),
    @param path: array z elementami patha,
    @param pola: array dwuwymiarowy ze wszystkimi polami,
    @param isPathFound: boolean oznaczający czy ścieżka została znaleziona,
    @param clicked: kliknięty element,
    @param width: szerokość głównej planszy - ilość divów,
    @param height: wysokość głównej planszy - ilość divów,
    @param ruch: czy aktualnie odbywa się ruch,
    @param wylosowaneKulki: nowe wylosowane kulki,
    @param sameColorBalls: kulki o tym samym kolorze,
    @param punkty: ilość punktów zdobytych,
    @param added: boolean oznaczający czy kulka została dodana,
    @param zbite: boolean oznaczający czy zostały już zbite kulki
    @param orientacja: orientacja w którą idą zbite kulki,
    @param numberOfBalls: ilość kulek do zbicia
}
 */
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