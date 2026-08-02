import Micro from "./micro";
import Persona from "./persona";

export default  abstract class   Empleado extends Persona
{
    private _legajo : string;
    
    public get legajo() : string {
        return this._legajo;
    }

    public abstract meSuboEnMicro(pMicro : Micro): boolean;

    public constructor ( pNombre : string, pApellido : string, pLegajo : string, pJefe : Empleado, pEmpleadosACargo : Set<Empleado>)
    {
        super(pNombre, pApellido);
        this._legajo = pLegajo;
        this._jefe = pJefe;
        //this._empleadosACargo = pEmpleadosACargo;
    }

    private _jefe : Empleado; // | undefined;
    
    public get jefe() : Empleado; // | undefined
    {
        return this._jefe;
    }

    private _empleadosACargo : Set<Empleado>;

    public esJefe() : boolean
    {
        //Si tengo al menos un empleado, soy jefe.
        if(this._empleadosACargo.size >= 1)
            return true;
        return false;
    }
    
    
}