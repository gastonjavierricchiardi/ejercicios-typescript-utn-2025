// \src\01EJXX\01EJ16_logistica\vehiculo\camioneta.ts
import { ICriterioCarga } from "../interfaces/InterfaceCarga";
import { Item } from "../item/item";

import Comoda from "../item/comoda";
import Heladera from "../item/heladera";
import Lavarropas from "../item/lavarropas";

export class CriterioCamioneta implements ICriterioCarga {
    public permite(item: Item): boolean {
        return (
            item instanceof Comoda ||
            item instanceof Heladera ||
            item instanceof Lavarropas
        );
    }
}