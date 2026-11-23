// \01EJ10\guardia.ts
import Persona from "./persona";

export default class Guardia extends Persona {
    public override presentarse(): string {
        return `Hola, mi nombre es ${this.getNombre()} ${this.getApellido()} y soy el guardia.`;
    }
}
