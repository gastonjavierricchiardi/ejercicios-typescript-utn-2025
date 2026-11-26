export class Documento {
    private _expediente: number;
    private _lanzamiento: Date;
    private _contenido: string;
    private _nombre: string;

    constructor(expediente: number, lanzamiento: Date, contenido: string, nombre: string) {
        this._expediente = expediente;
        this._lanzamiento = new Date(lanzamiento.getTime());
        this._contenido = contenido;
        this._nombre = nombre;
    }

    public getExpediente(): number {
        return this._expediente;
    }

    public getLanzamiento(): Date {
        return new Date(this._lanzamiento.getTime());
    }

    public getContenido(): string {
        return this._contenido;
    }

    public getNombre(): string {
        return this._nombre;
    }
}
