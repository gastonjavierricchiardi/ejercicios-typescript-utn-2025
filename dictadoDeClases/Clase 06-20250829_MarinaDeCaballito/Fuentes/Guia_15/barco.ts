import IPesable from "./ipesable";
export default abstract class  Barco implements IPesable
{
    descripcion(): string {
        return this.nombre;
    }
    private _peso : number;
    peso(): number {
        return this._peso;
    }

    constructor (pNombre : string, pVelocidad : number, pFlotabilidad : number, pEstabilidad : number, pPeso : number)
    {
        this.nombre = pNombre;
        this.velocidad = pVelocidad;
        this.estabilidad = pEstabilidad;
        this.flotabilidad = pFlotabilidad;
        this._peso = pPeso;
    }

    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _velocidad: number;
    public get velocidad(): number {
        return this._velocidad;
    }
    public set velocidad(value: number) {
        this._velocidad = value;
    }
    private _flotabilidad: number;
    public get flotabilidad(): number {
        return this._flotabilidad;
    }
    public set flotabilidad(value: number) {
        this._flotabilidad = value;
    }
    private _estabilidad: number;
    public get estabilidad(): number {
        return this._estabilidad;
    }
    public set estabilidad(value: number) {
        this._estabilidad = value;
    }

    abstract presentarse(): string;

}