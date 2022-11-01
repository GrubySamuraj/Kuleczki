interface poleInterface {
    col: number,
    row: number,
    isblocked: boolean,
    number: number,
    div: HTMLDivElement,
    isset: boolean,
    id: string,
    iskulka: boolean,
    kulka?: HTMLDivElement
    colorID?: number
    clicked?: boolean
}

interface kulkaInterface {
    color: string,
    colorID: number,
    div: HTMLDivElement
}
interface pathInterface {
    x: number,
    y: number,
    suma: number
}
interface usefulVariablesInterface {
    plansza: HTMLDivElement,
    boczneKulki: HTMLDivElement,
    punkciory: HTMLDivElement,
    colors: string[],
    kulki: (kulkaInterface)[][],
    path: poleInterface[],
    pola: poleInterface[][],
    isPathFound: boolean,
    clicked: HTMLDivElement | null,
    width: number,
    height: number,
    ruch: boolean,
    wylosowaneKulki: kulkaInterface[],
    sameColorBalls: kulkaInterface[],
    punkty: number,
    added: boolean,
    zbite: boolean,
    orientacja: string | null,
    numberOfBalls: number
}
export { poleInterface, pathInterface, kulkaInterface, usefulVariablesInterface }