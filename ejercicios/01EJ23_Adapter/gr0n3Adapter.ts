import { IFuenteVigilancia } from "./iFuenteVigilancia";
import { RegistroVigilancia } from "./registroVigilancia";
import { FlyingGr0n3 } from "./flyingGr0n3";

export class Gr0n3Adapter implements IFuenteVigilancia {
    private _idDispositivo: number;

    constructor(idDispositivo: number) {
        this._idDispositivo = idDispositivo;
    }

    public obtenerRegistros(): RegistroVigilancia[] {
        return FlyingGr0n3.getData(this._idDispositivo).map(objeto => {
            let tipo: string;
            let observaciones: string;
            switch (objeto.getType()) {
                case "human":
                    tipo = "Humano";
                    observaciones = "No corresponde";
                    break;
                case "animal":
                    tipo = "No humano";
                    observaciones = objeto.getKind();
                    break;
                default:
                    throw new Error(`Tipo aéreo no reconocido: ${objeto.getType()}.`);
            }

            let tamanio: string;
            switch (objeto.getSize()) {
                case "big":
                    tamanio = "Grande";
                    break;
                case "medium":
                    tamanio = "Mediano";
                    break;
                case "small":
                    tamanio = "Pequeño";
                    break;
                default:
                    throw new Error(`Tamaño aéreo no reconocido: ${objeto.getSize()}.`);
            }

            return new RegistroVigilancia(this._idDispositivo, tipo, tamanio, observaciones);
        });
    }
}
