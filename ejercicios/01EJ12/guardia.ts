// \01EJ12\guardia.ts
import Persona from "./persona";
import Visitante from "./visitante";

export default class Guardia extends Persona {
    public presentarse(): string {
        return `Hola, mi nombre es ${super.presentarse()} y soy el guardia.`;
    }

    // EJ 11 (queda con otro nombre)
    public controlarDocumentoPorDni(dni: number): string {
        return `Adelante persona con dni ${dni}`;
    }

    // EJ 12 (controlarDocumento ahora recibe Visitante)
    public controlarDocumento(visitante: Visitante): string {
        return `Adelante ${visitante.presentarse()} con dni ${visitante.getDni()}`;
    }
}