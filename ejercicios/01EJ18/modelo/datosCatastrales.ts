export class DatosCatastrales {
    private _provincia: string;
    private _barrio: string;
    private _calle: string;
    private _altura: number;
    private _codigoPostal: string;

    constructor(provincia: string, barrio: string, calle: string, altura: number, codigoPostal: string) {
        this._provincia = provincia;
        this._barrio = barrio;
        this._calle = calle;
        this._altura = altura;
        this._codigoPostal = codigoPostal;
    }

    public getProvincia(): string {
        return this._provincia;
    }

    public getBarrio(): string {
        return this._barrio;
    }

    public getCalle(): string {
        return this._calle;
    }

    public getAltura(): number {
        return this._altura;
    }

    public getCodigoPostal(): string {
        return this._codigoPostal;
    }

    public estaCompleto(): boolean {
        return this._provincia.trim() !== "" &&
            this._barrio.trim() !== "" &&
            this._calle.trim() !== "" &&
            Number.isInteger(this._altura) &&
            this._codigoPostal.trim() !== "";
    }
}
