// \01EJ12\visitante.ts
import Persona from "./persona";

export default class Visitante extends Persona {
    // * 1) ATRIBUTOS
    private _dni: number = 0;
    // * 3) PROPIEDADES
    public getDni(): number { return this._dni };
    public setDni(v: number): void { this._dni = v };
}
