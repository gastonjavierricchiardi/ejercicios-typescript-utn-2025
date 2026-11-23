import { Item } from "./item";

export default class CajaPequena extends Item {
    constructor(
        descripcion: string,
        alto: number,
        ancho: number,
        profundidad: number,
        numeroIdentificador: number
    ) {
        super(descripcion, alto, ancho, profundidad, numeroIdentificador);
    }
}
