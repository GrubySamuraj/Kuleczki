/**
 * @module interfaces - Plik z interface'ami
 */
/**
 * @param poleInterface - interface odpowiedzialny za pole
 * @param col numer kolumny danego pola
 * @param row numer wiersza danego pola
 * @param isblocked informacja o tym czy dane pole można sprawdzić do pathfindingu
 * @param number wartość danego pola w kontekście pathfindingu
 * @param div div do którego odwołuje się obiekt
 * @param isset czy dane pole juz jest zdefiniowane
 * @param id id pola
 * @param iskulka czy dany element posiada kulkę
 * @param kulka jeśli posiada to tu jest div z kulką
 * @param colorID jeśli posiada kulkę to tu jest id koloru
 * @param clicked czy zostało kliknięte
 */
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
/**
 * @param color - kolor kulki
 * @param colorID - id koloru kulki
 * @param div - div kulki
 */
interface kulkaInterface {
    color: string,
    colorID: number,
    div: HTMLDivElement
}
/**
 *  @param plansza - div z planszą główną
    @param boczneKulki - div z kontenerem obok na wylosowane kulki,
    @param punkciory - div z punktami,
    @param colors - możliwe do wylosowania kolory,
    @param kulki - array dwuwymiarowy ze wszystkimi kulkami lub fake-kulkami (kulki o id=-1 co oznacza ze nie ma tam kulki),
    @param path - array z elementami patha,
    @param pola - array dwuwymiarowy ze wszystkimi polami,
    @param isPathFound - boolean oznaczający czy ścieżka została znaleziona,
    @param clicked - kliknięty element,
    @param width - szerokość głównej planszy - ilość divów,
    @param height - wysokość głównej planszy - ilość divów,
    @param ruch - czy aktualnie odbywa się ruch,
    @param wylosowaneKulki - nowe wylosowane kulki,
    @param sameColorBalls - kulki o tym samym kolorze,
    @param punkty - ilość punktów zdobytych,
    @param added - boolean oznaczający czy kulka została dodana,
    @param zbite - boolean oznaczający czy zostały już zbite kulki
    @param orientacja - orientacja w którą idą zbite kulki,
    @param numberOfBalls - ilość kulek do zbicia
}
 */
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
export { poleInterface, kulkaInterface, usefulVariablesInterface }