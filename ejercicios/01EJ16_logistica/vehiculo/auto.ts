import { Vehiculo } from "./vehiculo";
import { Item } from "../item/item";
import Televisor from "../item/televisor";
import Bicicleta from "../item/bicicleta";
import CajaPequena from "../item/cajaPequena";

export default class Auto extends Vehiculo {
    private static readonly _capacidadMaxima: number = 5;

    constructor() {
        super();
    }

    public cargar(item: Item): void {
        if (this.tieneCapacidad(Auto._capacidadMaxima)) {
            if (item instanceof Televisor) {
                this.agregarElemento(item);
            } else if (item instanceof Bicicleta && item.getEsPlegable()) {
                this.agregarElemento(item);
            } else if (item instanceof CajaPequena) {
                this.agregarElemento(item);
            }
        }
    }
}
