// \src\01EJXX\01EJ16_logistica\criterio\criterioAuto.ts
import { ICriterioCarga } from "../interfaces/InterfaceCarga";
import { Item } from "../item/item";

import Televisor from "../item/televisor";
import Bicicleta from "../item/bicicleta";
import CajaPequena from "../item/cajaPequena";

export class CriterioAuto implements ICriterioCarga {
    public permite(item: Item): boolean {
        return (
            item instanceof Televisor ||
            (item instanceof Bicicleta && item.getEsPlegable()) ||
            item instanceof CajaPequena
        );
    }

}