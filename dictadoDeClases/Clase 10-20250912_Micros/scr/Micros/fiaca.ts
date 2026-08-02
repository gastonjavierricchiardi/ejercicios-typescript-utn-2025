import Empleado from "./empleado";
import Micro from "./micro";

export default class Fiaca extends Empleado
{


    public meSuboEnMicro(pMicro: Micro): boolean {
        if (pMicro.hayLugarSentado())
            return true;
        else
            return false;
    }
    
}