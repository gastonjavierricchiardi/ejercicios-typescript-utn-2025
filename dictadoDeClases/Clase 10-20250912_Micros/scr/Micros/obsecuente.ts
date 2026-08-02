import Empleado from "./empleado";
import Micro from "./micro";

export default class Obsecuente extends Empleado
{
    public constructor ()
    {
        
    }
    public meSuboEnMicro(pMicro: Micro): boolean {
        return this.jefe.meSuboEnMicro(pMicro);
    }
    
}