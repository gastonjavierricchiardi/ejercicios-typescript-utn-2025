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

    public validarDatos(nombre: string, costoProduccion: number, observacion: string): void {
        const errores: string[] = [];

        if (nombre.length < 1 || nombre.length > 15) {
            errores.push("El nombre debe tener entre 1 y 15 caracteres, inclusive.");
        }
        if (!(costoProduccion > 0)) {
            errores.push("El costo de producción debe ser mayor que cero.");
        }
        if (observacion.length > 30) {
            errores.push("La observación no debe superar los 30 caracteres.");
        }

        if (errores.length > 0) {
            throw new Error(errores.join(" "));
        }
    }
}
