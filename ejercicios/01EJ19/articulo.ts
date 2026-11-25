export class Articulo {
    private _nombre: string;
    private _costoProduccion: number;
    private _observacion: string;

    constructor(nombre: string, costoProduccion: number, observacion: string = "") {
        this._nombre = nombre;
        this._costoProduccion = costoProduccion;
        this._observacion = observacion;
    }

    public getNombre(): string {
        return this._nombre;
    }

    public getCostoProduccion(): number {
        return this._costoProduccion;
    }

    public getObservacion(): string {
        return this._observacion;
    }
}
