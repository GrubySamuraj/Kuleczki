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
    colorID: number
}
interface pathInterface {
    x: number,
    y: number,
    suma: number
}
export { poleInterface, pathInterface, kulkaInterface }