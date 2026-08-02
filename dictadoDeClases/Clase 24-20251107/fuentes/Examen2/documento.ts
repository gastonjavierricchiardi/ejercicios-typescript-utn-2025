export default class Documento
{
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _contenido: string;
    public get contenido(): string {
        return this._contenido;
    }
    public set contenido(value: string) {
        this._contenido = value;
    }

    constructor(pNombre : string, pContenido : string)
    {
        this._contenido = pContenido;
        this._nombre=pNombre;
    }

    public mostrarInfo():string
    {
        return this._nombre + " " + this._contenido;
    }

}