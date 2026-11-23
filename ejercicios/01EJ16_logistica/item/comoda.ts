import { Item } from "./item";

export default class Comoda extends Item {
    private _superficie: number;
    private _cantidadCajones: number;

    constructor(
        descripcion: string,
        alto: number,
        ancho: number,
        profundidad: number,
        numeroIdentificador: number,
        superficie: number,
        cantidadCajones: number
    ) {
        super(descripcion, alto, ancho, profundidad, numeroIdentificador);
        this._superficie = superficie;
        this._cantidadCajones = cantidadCajones;
    }

    public getSuperficie(): number {
        return this._superficie;
    }

    public getCantidadCajones(): number {
        return this._cantidadCajones;
    }
}
