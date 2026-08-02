import CreadorAbstracto from "./creadorAbstracto";
import ProductoAbstracto from "./productoAbstracto";
import ZapatoUrbanoConcreto from "./zapatoUrbanoConcreto";

export default class CreadorConcretoZapatoUrbano extends CreadorAbstracto
{
    CreateZapato(): ProductoAbstracto {
        const miZapatoConcreto : ZapatoUrbanoConcreto = 
        new ZapatoUrbanoConcreto("Urbano", "Negro", "Cuero", 42, "Adidas");

        return miZapatoConcreto;
    }

    
}