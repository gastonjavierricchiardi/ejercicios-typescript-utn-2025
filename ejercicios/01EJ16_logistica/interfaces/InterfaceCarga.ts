// \src\01EJXX\01EJ16_logistica\interfaces\InterfaceCarga.ts
import { Item } from "../item/item";

export interface ICriterioCarga {
    permite(item: Item): boolean;
}