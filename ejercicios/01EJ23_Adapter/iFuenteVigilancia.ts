import { RegistroVigilancia } from "./registroVigilancia";

export interface IFuenteVigilancia {
    obtenerRegistros(): RegistroVigilancia[];
}
