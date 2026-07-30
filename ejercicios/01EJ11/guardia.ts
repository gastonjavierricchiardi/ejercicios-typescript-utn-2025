// \01ej11\guardia.ts
import Persona from "./persona"

export default class Guardia extends Persona {
    // No lleva atributos, ya que extiende de Persona
    // Sobre escribe MÉTODOS
    public presentarse(): string {
        return `Hola, mi nombre es ${super.presentarse()} y soy el guardia.`;
    }
    public controlarDocumento(dni: number): string {
        return `Adelante persona con dni ${dni}`;
    }
}