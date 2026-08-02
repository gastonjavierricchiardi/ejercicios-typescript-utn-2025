import Empleado from "./empleado";
import Micro from "./micro";

export default class Moderado extends Empleado
{
    private _cantidadX : number;
    public constructor (pNombre : string, pApellido : string, pLegajo : string, pJefe : Empleado, pEmpleadosACargo : Set<Empleado>, pCantidadX : number)
    {
        super(pNombre, pApellido,pLegajo,pJefe,pEmpleadosACargo);
        this._cantidadX = pCantidadX;
    }

    public meSuboEnMicro(pMicro: Micro): boolean {
        if (pMicro.espaciosLibres() >= this._cantidadX )
            return true;
        else
            return false;
    }
    
}