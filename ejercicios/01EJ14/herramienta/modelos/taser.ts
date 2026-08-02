// \01EJ14\herramienta\modelos\taser.ts
import { IHerramientas } from "../iherramientas";
// Taser: pesa 300 gramos

export class Taser implements IHerramientas {
    tipo(): string {
        return "Taser";
    }
    pesoGramos(): number {
        return 300;
    }
}