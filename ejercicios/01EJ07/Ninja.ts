// \01EJ07\Ninja.ts

export default class Ninja {
    // * 1) ATRIBUTOS
    private _arteMarcial: string = "";
    private _arma: string = "";
    private _fuerza: number = 0;
    private _salto: number = 0;

    // * 2) CONSTRUCTOR VACÍO IMPLÍCITO

    // * 3) PROPIEDADES
    public getArteMarcial(): string { return this._arteMarcial };
    public setArteMarcial(v: string): void { this._arteMarcial = v };

    public getArma(): string { return this._arma };
    public setArma(v: string): void { this._arma = v };

    public getFuerza(): number { return this._fuerza };
    public setFuerza(v: number): void { this._fuerza = v };

    public getSalto(): number { return this._salto };
    public setSalto(v: number): void { this._salto = v };

    // * 4) MÉTODOS
    public saltar(multiplicador: number): void {
        console.log(this._salto * multiplicador);
    }
    public ataque(): void {
        console.log(`Arma: ${this._arma} - Arte marcial: ${this._arteMarcial}`);
    }

    // SRP: la clase combina lógica de negocio e impresión en pantalla.
    // Se mantiene así porque la consigna pide que ambos métodos impriman directamente.
}
