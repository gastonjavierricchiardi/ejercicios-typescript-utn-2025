export class Prestamo {
    private _monto: number;
    private _interes: number;

    constructor(monto: number, interes: number) {
        this._monto = monto;
        this._interes = interes;
    }

    public getMonto(): number {
        return this._monto;
    }

    public getInteres(): number {
        return this._interes;
    }
}
