import { Item } from "../item/item";

export abstract class Vehiculo {
    private _items: Item[];

    protected constructor() {
        this._items = [];
    }

    public abstract cargar(item: Item): void;

    public listarItems(): Item[] {
        return [...this._items];
    }

    protected tieneCapacidad(capacidadMaxima: number): boolean {
        return this._items.length < capacidadMaxima;
    }

    protected agregarElemento(item: Item): void {
        this._items.push(item);
    }
}
