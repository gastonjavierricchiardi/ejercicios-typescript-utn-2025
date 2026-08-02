import Barco from "./barco";

export default class Imperio
{
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    private _flota : Array<Barco>;

    constructor (pNombre : string, pFlota : Array<Barco>)
    {
        this._nombre = pNombre;
        this._flota = pFlota;
    }

    public Presentarse() : string
    {

        let mensaje : string;
        mensaje = "Soy el imperio " + this.nombre + "\n";
        mensaje = mensaje  + "Y tengo " + this._flota.length + " de barquitos de flota";

        return mensaje;
    }


}