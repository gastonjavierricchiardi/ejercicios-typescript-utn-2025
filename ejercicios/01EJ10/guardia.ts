// \01ej08\guardia.ts
import Persona from "./persona"

export default class Guardia extends Persona {

    constructor(
        nombre: string,
        apellido: string
    ) {
        super(nombre, apellido);
    }

    public presentarse(): string {
        return `Hola, mi nombre es ${this.getNombre()} ${this.getApellido()} y soy el guardia.`;
    }
}

/**
Acá solo usamos super en el método
export default class Guardia extends Persona {
    // El ejercicio solo pide sobre escribir el método presentarse
    public presentarse(): string {
        return `Hola, mi nombre es ${super.presentarse()} y soy el guardia.`;
    }
}
*/