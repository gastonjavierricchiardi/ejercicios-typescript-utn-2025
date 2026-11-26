import { Gr0n3Object } from "./gr0n3Object";

export class FlyingGr0n3 {
    public static getData(id: number): Gr0n3Object[] {
        if (!Number.isInteger(id) || id < 1 || id > 10) {
            throw new Error(`ID de dron inválido: ${id}. Debe ser un entero entre 1 y 10.`);
        }

        switch (id) {
            case 1:
                return [
                    new Gr0n3Object("big", "human", ""),
                    new Gr0n3Object("small", "animal", "dog"),
                    new Gr0n3Object("medium", "animal", "cat")
                ];
            case 2:
                return [];
            case 3:
                return [
                    new Gr0n3Object("big", "animal", "cow"),
                    new Gr0n3Object("small", "animal", "sheep"),
                    new Gr0n3Object("medium", "animal", "horse")
                ];
            case 10:
                return [new Gr0n3Object("medium", "animal", "undefined")];
            default:
                throw new Error(`No existe el dron con ID ${id} en la simulación.`);
        }
    }
}
