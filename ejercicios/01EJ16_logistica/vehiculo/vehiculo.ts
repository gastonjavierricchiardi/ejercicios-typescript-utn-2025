// \src\01EJXX\01EJ16_logistica\vehiculo\vehiculo.ts 
import { ICriterioCarga } from "../interfaces/InterfaceCarga";
import { Item } from "../item/item";

export abstract class Vehiculo {
    private _items: Item[];
    private readonly _capacidadMaxima: number;
    private _criterio: ICriterioCarga;

    constructor(capacidadMaxima: number, criterio: ICriterioCarga) {
        this._items = [];
        this._capacidadMaxima = capacidadMaxima;
        this._criterio = criterio;
    }

    public getItems(): Item[] {
        return [...this._items];
    }

    public getCapacidadMaxima(): number {
        return this._capacidadMaxima;
    }

    // ✅ helper común 
    protected intentarCargar(item: Item): boolean {
        if (this._items.length >= this._capacidadMaxima) {
            return false;
        }
        if (!this._criterio.permite(item)) {
            return false;
        }
        this._items.push(item);
        return true;
    }

    // ✅ helper común 
    protected listarItemsBase(): void {
        for (const item of this._items) {
            const d = item.getDimensiones();
            console.log(
                `ID: ${item.getId()} | ` +
                `Desc: ${item.getDescripcion()} | ` +
                `Dim: ${d.getAlto()}x${d.getAncho()}x${d.getProfundidad()}`
            );
        }
    }

    public abstract cargar(item: Item): void;
    public abstract listarItems(): void;
} 