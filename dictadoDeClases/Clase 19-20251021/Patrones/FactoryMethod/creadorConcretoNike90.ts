import BotinFutbolNike90 from "./botinFutbolNike90Concreto";
import CreadorAbstracto from "./creadorAbstracto";
import ProductoAbstracto from "./productoAbstracto";

export default class CreadorBotinNike90 extends CreadorAbstracto
{
    CreateZapato(): ProductoAbstracto {
        const miBotin : BotinFutbolNike90 = new BotinFutbolNike90();
        miBotin.color="Rojo";
        miBotin.material = "Cuero";
        miBotin.talle = 35;
        miBotin.tipo = "Deportivo";


        return miBotin;
    }
    
}