export default  class  Ambiente
{
    private _ancho: number;
    public get ancho(): number {
        return this._ancho;
    }
    public set ancho(value: number) {
        this._ancho = value;
    }
    private _largo: number;
    public get largo(): number {
        return this._largo;
    }
    public set largo(value: number) {
        this._largo = value;
    }
    private _esLuminoso: boolean;
    public get esLuminoso(): boolean {
        return this._esLuminoso;
    }
    public set esLuminoso(value: boolean) {
        this._esLuminoso = value;
    }
    private _tipo: string;
    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }

    private _esCubierto: boolean;
    public get esCubierto(): boolean {
        return this._esCubierto;
    }
    public set esCubierto(value: boolean) {
        this._esCubierto = value;
    }


    public constructor (pAncho : number, pLargo : number, pEsLuminoso : boolean, pTipo : string, pEsCubierto : boolean)
    {
        this._ancho = pAncho;
        this._largo = pLargo;
        this._tipo = pTipo;
        this._esLuminoso = pEsLuminoso;
        this._esCubierto = pEsCubierto;
    }

    public dimension () : number
    {
        return this.ancho * this.largo;
    }
}