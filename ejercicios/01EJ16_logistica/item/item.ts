export abstract class Item {
    private _descripcion: string;
    private _alto: number;
    private _ancho: number;
    private _profundidad: number;
    private _numeroIdentificador: number;

    protected constructor(
        descripcion: string,
        alto: number,
        ancho: number,
        profundidad: number,
        numeroIdentificador: number
    ) {
        this._descripcion = descripcion;
        this._alto = alto;
        this._ancho = ancho;
        this._profundidad = profundidad;
        this._numeroIdentificador = numeroIdentificador;
    }

    public getDescripcion(): string {
        return this._descripcion;
    }

    public getAlto(): number {
        return this._alto;
    }

    public getAncho(): number {
        return this._ancho;
    }

    public getProfundidad(): number {
        return this._profundidad;
    }

    public getNumeroIdentificador(): number {
        return this._numeroIdentificador;
    }
}
