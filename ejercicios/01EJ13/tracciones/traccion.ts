// \01EJ13\tracciones\traccion.ts

export interface ITraccion {
    tipo(): string;
    penalizacionHp(): number;
    kmMaximos(): number;
    infoExtra(): string;
}