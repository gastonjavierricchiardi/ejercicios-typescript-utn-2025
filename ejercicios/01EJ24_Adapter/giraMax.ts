export class GiraMax {
    private _ingresos: number;
    private _egresos: number;

    constructor(ingresos: number, egresos: number) {
        this._ingresos = ingresos;
        this._egresos = egresos;
    }

    public getInboundAccess(): number {
        return this._ingresos;
    }

    public getOutboundAccess(): number {
        return this._egresos;
    }
}
