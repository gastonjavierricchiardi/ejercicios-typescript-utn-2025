// \01EJ15_marina\navio\navio.ts

export abstract class Navio {
    private _nombre: string;
    private _flotabilidad: number; // 100 maximo
    private _solidez: number; // 100 maximo
    private _estabilidad: number; // 100 maximo
    private _velocidadCrucero: number; // 50 maximo (millas nauticas, no se bien.)

    constructor(nombre: string, flotabilidad: number, solidez: number, estabilidad: number, velocidadCrucero: number) {
        this._nombre = nombre;
        this._flotabilidad = flotabilidad;
        this._solidez = solidez;
        this._estabilidad = estabilidad;
        this._velocidadCrucero = velocidadCrucero;
    }

    public getNombre(): string {
        return this._nombre;
    }

    public setNombre(value: string): void {
        this._nombre = value;
    }

    public getFlotabilidad(): number {
        return this._flotabilidad;
    }

    public setFlotabilidad(value: number): void {
        this._flotabilidad = value;
    }

    public getSolidez(): number {
        return this._solidez;
    }

    public setSolidez(value: number): void {
        this._solidez = value;
    }

    public getEstabilidad(): number {
        return this._estabilidad;
    }

    public setEstabilidad(value: number): void {
        this._estabilidad = value;
    }

    public getVelocidadCrucero(): number {
        return this._velocidadCrucero;
    }

    public setVelocidadCrucero(value: number): void {
        this._velocidadCrucero = value;
    }
}