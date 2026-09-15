// \src\01EJXX\01EJ16_logistica\vehiculo\camioneta.ts
import { Vehiculo } from "./vehiculo";
import { CriterioCamioneta } from "../criterio/criterioCamioneta";
import { Item } from "../item/item";

export default class Camioneta extends Vehiculo {
    constructor() {
        super(10, new CriterioCamioneta());
    }

    public cargar(item: Item): void {
        const ok = this.intentarCargar(item);
        console.log(ok ? "Camioneta: item cargado" : "Camioneta: no se pudo cargar");
    }

    public listarItems(): void {
        console.log("--- Carga de la camioneta ---");
        this.listarItemsBase();
    }
}