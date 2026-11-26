export class Ley {
    private _folio: number;
    private _emision: Date;
    private _desarrollo: string;
    private _firmante: string;

    constructor(folio: number, emision: Date, desarrollo: string, firmante: string) {
        this._folio = folio;
        this._emision = new Date(emision.getTime());
        this._desarrollo = desarrollo;
        this._firmante = firmante;
    }

    public getFolio(): number {
        return this._folio;
    }

    public getEmision(): Date {
        return new Date(this._emision.getTime());
    }

    public getDesarrollo(): string {
        return this._desarrollo;
    }

    public getFirmante(): string {
        return this._firmante;
    }
}
