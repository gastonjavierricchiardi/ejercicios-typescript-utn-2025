export class Ambiente {
    private _tipo: string;
    private _ancho: number;
    private _largo: number;
    private _luminoso: boolean;

    constructor(tipo: string, ancho: number, largo: number, luminoso: boolean) {
        this._tipo = tipo;
        this._ancho = ancho;
        this._largo = largo;
        this._luminoso = luminoso;
    }

    public getTipo(): string {
        return this._tipo;
    }

    public getAncho(): number {
        return this._ancho;
    }

    public getLargo(): number {
        return this._largo;
    }

    public getLuminoso(): boolean {
        return this._luminoso;
    }

    public estaCompleto(): boolean {
        return this._tipo.trim() !== "" &&
            Number.isFinite(this._ancho) && this._ancho > 0 &&
            Number.isFinite(this._largo) && this._largo > 0;
    }
}
