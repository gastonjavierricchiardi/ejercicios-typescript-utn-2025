export class Molinit {
    private _ingresos: number;
    private _egresos: number;

    constructor(ingresos: number, egresos: number) {
        this._ingresos = ingresos;
        this._egresos = egresos;
    }

    public obtenerEntrada(): number {
        return this._ingresos;
    }

    public obtenerSalida(): number {
        return this._egresos;
    }
}
