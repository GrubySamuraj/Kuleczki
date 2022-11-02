/**@module dekoratory - moduł zawierający dekoratory */
/**
 * dekorator ten jest odpowiedzialny za dodawanie "szyderki" z gracza
 */
export function szyderka(target: Object, name: string, descriptor: PropertyDescriptor) {
    let oryg = descriptor.value;
    descriptor.value = function (...args: any[]) {
        this.odklejki = ["słabo", "ale frajer", "pudło!!!", "NOOBEK", "😬😬😬", "😂😂😂😂", "Nie udało ci się jeszcze wygrać??"];
        this.szyderka = document.getElementById("szyderka") as HTMLDivElement
        this.szyderka.innerHTML = this.odklejki[Math.floor(Math.random() * this.odklejki.length)];
        window.setInterval(() => {
            this.szyderka.innerHTML = this.odklejki[Math.floor(Math.random() * this.odklejki.length)];
        }, 3000);
        let result = oryg.apply(this, args);
        return result;
    }
}