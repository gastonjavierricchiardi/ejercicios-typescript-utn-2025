import Empleado from "./empleado";
import Micro from "./micro";

export default class Apurado extends Empleado
{
    public meSuboEnMicro(pMicro: Micro): boolean {
        return true;
    }
    
}