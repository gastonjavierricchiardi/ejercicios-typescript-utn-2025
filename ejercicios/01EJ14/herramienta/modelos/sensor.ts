// \01EJ14\herramienta\modelos\sensor.ts
import { IHerramientas } from "../iherramientas";
// Sensor infrarrojo: pesa 250 gramos

export class Sensor implements IHerramientas {
    tipo(): string {
        return "Sensor infrarrojo";
    }

    pesoGramos(): number {
        return 250;
    }
}
