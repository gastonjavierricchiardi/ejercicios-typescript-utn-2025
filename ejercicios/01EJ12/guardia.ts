// \01EJ12\guardia.ts
import Persona from "./persona";
import Visitante from "./visitante";

export default class Guardia extends Persona {
    public override presentarse(): string {
        return `Hola, mi nombre es ${this.getNombre()} ${this.getApellido()} y soy el guardia.`;
    }

    public controlarDocumento(visitante: Visitante): string {
        return `Adelante ${visitante.presentarse()} con dni ${visitante.getDni()}`;
    }
}
