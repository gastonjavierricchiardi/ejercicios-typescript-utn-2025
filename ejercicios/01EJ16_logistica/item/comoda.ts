// \src\01EJXX\01EJ16_logistica\item\comoda.ts

import { Item } from "./item";
import { Dimensiones } from "../dimensiones/dimensiones";

export default class Comoda extends Item {
    private _superficie: number;
    private _cantidadCajones: number;

    constructor(
        id: number,
        descripcion: string,
        dimensiones: Dimensiones,
        superficie: number,
        cantidadCajones: number
    ) {
        super(id, descripcion, dimensiones);
        this._superficie = superficie;
        this._cantidadCajones = cantidadCajones;
    }

    public getSuperficie(): number {
        return this._superficie;
    }
    public setSuperficie(value: number): void {
        this._superficie = value;
    }
    public getCantidadCajones(): number {
        return this._cantidadCajones;
    }
    public setCantidadCajones(value: number): void {
        this._cantidadCajones = value;
    }

}