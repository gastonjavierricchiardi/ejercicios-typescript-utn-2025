export class RegistroVigilancia {
    private _idDispositivo: number;
    private _tipo: string;
    private _tamanio: string;
    private _observaciones: string;

    constructor(idDispositivo: number, tipo: string, tamanio: string, observaciones: string) {
        this._idDispositivo = idDispositivo;
        this._tipo = tipo;
        this._tamanio = tamanio;
        this._observaciones = observaciones;
    }

    public getIdDispositivo(): number {
        return this._idDispositivo;
    }

    public getTipo(): string {
        return this._tipo;
    }

    public getTamanio(): string {
        return this._tamanio;
    }

    public getObservaciones(): string {
        return this._observaciones;
    }
}
