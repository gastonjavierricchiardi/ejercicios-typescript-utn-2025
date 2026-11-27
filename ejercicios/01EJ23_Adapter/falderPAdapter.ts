import { IFuenteVigilancia } from "./iFuenteVigilancia";
import { RegistroVigilancia } from "./registroVigilancia";
import { FalderP } from "./falderP";
import { FPType } from "./fpType";
import { FPGender } from "./fpGender";

export class FalderPAdapter implements IFuenteVigilancia {
    private _falderP: FalderP;

    constructor(falderP: FalderP) {
        this._falderP = falderP;
    }

    public obtenerRegistros(): RegistroVigilancia[] {
        const registros: RegistroVigilancia[] = [];

        for (const unidad of this._falderP.getData()) {
            for (const dato of unidad.getDatos()) {
                let tipo: string;
                let observaciones: string;
                switch (dato.getType()) {
                    case FPType.HUMAN:
                        tipo = "Humano";
                        switch (dato.getGender()) {
                            case FPGender.MALE:
                                observaciones = "MALE";
                                break;
                            case FPGender.FEMALE:
                                observaciones = "FEMALE";
                                break;
                            default:
                                throw new Error(`Género terrestre no reconocido: ${dato.getGender()}.`);
                        }
                        break;
                    case FPType.NO_HUMAN:
                        tipo = "No humano";
                        observaciones = "No corresponde";
                        break;
                    default:
                        throw new Error(`Tipo terrestre no reconocido: ${dato.getType()}.`);
                }

                let tamanio: string;
                switch (dato.getSize()) {
                    case "rande":
                        tamanio = "Grande";
                        break;
                    case "niranipi":
                        tamanio = "Mediano";
                        break;
                    case "pichitito":
                        tamanio = "Pequeño";
                        break;
                    default:
                        throw new Error(`Tamaño terrestre no reconocido: ${dato.getSize()}.`);
                }

                registros.push(new RegistroVigilancia(
                    unidad.getId(), tipo, tamanio, observaciones
                ));
            }
        }

        return registros;
    }
}
