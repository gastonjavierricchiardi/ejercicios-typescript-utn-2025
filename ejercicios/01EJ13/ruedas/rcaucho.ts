// \01EJ13\ruedas\rcaucho.ts
import { ITraccion } from "../tracciones/traccion";

export class Rcaucho implements ITraccion {
    tipo(): string {
        return "Rueda de caucho";
    }
    penalizacionHp(): number {
        return 1;
    }
    kmMaximos(): number {
        return 100;
    }
    infoExtra(): string {
        return ""; // Sin caracteristicas adicionales
    }
}