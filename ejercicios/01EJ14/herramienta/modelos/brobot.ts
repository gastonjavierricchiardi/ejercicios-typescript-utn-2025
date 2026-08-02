// \01EJ14\herramienta\modelos\brobot.ts
import { IHerramientas } from "../iherramientas";

export class Brobot implements IHerramientas {
    tipo(): string {
        return "Brazo robótico";
    }
    pesoGramos(): number {
        return 500;
    }
}