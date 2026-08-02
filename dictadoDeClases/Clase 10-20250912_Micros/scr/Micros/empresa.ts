import Empleado from "./empleado";
import Micro from "./micro";

export default   class   Empresa
{
    private _razonSocial : string;
    private _empleados : Array<Empleado>;
    private _microsContratados : Array<Micro>;
    
    public constructor (pRazonSocial : string, pEmpleados : Array<Empleado>,  pMicrosContratados : Array<Micro>)
    {
        this._razonSocial = pRazonSocial;
        this._empleados = pEmpleados;
        this._microsContratados = pMicrosContratados;
    }
}