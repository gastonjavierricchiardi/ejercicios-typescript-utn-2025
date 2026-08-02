import Empleado from "./empleado";
import Micro from "./micro";

export default class Claustrofobico extends Empleado
{
    readonly toleranciaVolumen : number = 120;

    public meSuboEnMicro(pMicro: Micro): boolean {
        if (pMicro.volumen <= this.toleranciaVolumen)
            return false;
        else
            return true;
    }
    
}