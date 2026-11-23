import { Vehiculo } from "./vehiculo";
import { Item } from "../item/item";
import Comoda from "../item/comoda";
import Heladera from "../item/heladera";
import Lavarropas from "../item/lavarropas";

export default class Camioneta extends Vehiculo {
    private static readonly _capacidadMaxima: number = 10;

    constructor() {
        super();
    }

    public cargar(item: Item): void {
        if (this.tieneCapacidad(Camioneta._capacidadMaxima)) {
            if (item instanceof Comoda) {
                this.agregarElemento(item);
            } else if (item instanceof Heladera) {
                this.agregarElemento(item);
            } else if (item instanceof Lavarropas) {
                this.agregarElemento(item);
            }
        }
    }
}
