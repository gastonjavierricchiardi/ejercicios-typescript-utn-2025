// \src\01EJXX\01EJ16_logistica\vehiculo\auto.ts 
import { Vehiculo } from "./vehiculo";
import { CriterioAuto } from "../criterio/criterioAuto";
import { Item } from "../item/item";

export default class Auto extends Vehiculo {
    constructor() {
        super(5, new CriterioAuto());
    }

    public cargar(item: Item): void {
        const ok = this.intentarCargar(item);
        console.log(ok ? "Auto: item cargado" : "Auto: no se pudo cargar");
    }

    public listarItems(): void {
        console.log("--- Carga del auto ---");
        this.listarItemsBase();
    }
}