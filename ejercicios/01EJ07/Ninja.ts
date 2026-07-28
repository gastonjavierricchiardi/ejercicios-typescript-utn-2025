// \01EJ07\Ninja.ts

export default class Ninja {
    // * 1) ATRIBUTOS
    private _arteMarcial: string;
    private _arma: string;
    private _fuerza: number = 1;
    private _salto: number = 1;

    // * 2) CONSTRUCTOR CON VALIDACIÓN
    constructor(
        arte: string,
        arma: string,
        fuerza: number,
        salto: number
    ) {
        this._arteMarcial = arte;
        this._arma = arma;
        this.setFuerza(fuerza);
        this.setSalto(salto);
    }

    // * 3) PROPIEDADES
    public getArteMarcial(): string { return this._arteMarcial };
    public setArteMarcial(v: string): void { this._arteMarcial = v };

    public getArma(): string { return this._arma };
    public setArma(v: string): void { this._arma = v };

    public getFuerza(): number { return this._fuerza };
    public setFuerza(v: number): void { this._fuerza = v > 0 ? v : 1 };

    public getSalto(): number { return this._salto };
    public setSalto(v: number): void { this._salto = v > 0 ? v : 1 };

    // * 4) MÉTODOS
    public saltar(multiplicador: number): number {
        return this._salto * multiplicador;
    }
    public ataque(): string {
        return `Arma: ${this._arma} | Arte marcial: ${this._arteMarcial}`;
    }
}