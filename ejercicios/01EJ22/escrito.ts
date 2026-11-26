export class Escrito {
    private _legajo: number;
    private _erogacion: Date;
    private _cuerpo: string;
    private _autor: string;

    constructor(legajo: number, erogacion: Date, cuerpo: string, autor: string) {
        this._legajo = legajo;
        this._erogacion = new Date(erogacion.getTime());
        this._cuerpo = cuerpo;
        this._autor = autor;
    }

    public getLegajo(): number {
        return this._legajo;
    }

    public getErogacion(): Date {
        return new Date(this._erogacion.getTime());
    }

    public getCuerpo(): string {
        return this._cuerpo;
    }

    public getAutor(): string {
        return this._autor;
    }
}
