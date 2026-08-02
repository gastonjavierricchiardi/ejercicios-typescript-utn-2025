import Persona from "./persona";
import Guardia from "./Guardia"

export default class Visitante extends Persona
{
    private _dni : number;
    public set dni (value : number)
    {
        this._dni = value;
    }
    public get dni () : number
    {
        return this._dni;
    }
    public constructor (pNombre : string, pApellido : string, pDni : number)
    {
        super(pNombre, pApellido);
        this._dni = pDni;
    }

}



