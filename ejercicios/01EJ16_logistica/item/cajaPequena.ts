// \src\01EJXX\01EJ16_logistica\item\cajaPequena.ts

import { Item } from "./item";
import { Dimensiones } from "../dimensiones/dimensiones";

export default class CajaPequena extends Item {
    constructor(id: number, descripcion: string, dimensiones: Dimensiones) {
        super(id, descripcion, dimensiones);
    }
}