// ejercicios/01EJ15_marina/navio/navio.ts
export abstract class Navio {
    private _nombre: string;
    private _flotabilidad: string;
    private _estabilidad: string;

    protected constructor(
        nombre: string,
        flotabilidad: string,
        estabilidad: string
    ) {
        this._nombre = nombre;
        this._flotabilidad = flotabilidad;
        this._estabilidad = estabilidad;
    }

    public getNombre(): string { return this._nombre; }
    public getFlotabilidad(): string { return this._flotabilidad; }
    public getEstabilidad(): string { return this._estabilidad; }
}
