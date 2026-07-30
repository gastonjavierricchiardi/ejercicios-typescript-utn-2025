// \01ej12\visitante.ts
import Persona from "./persona"

export default class Visitante extends Persona {
    // * 1) ATRIBUTOS
    private _dni: number;

    // * 2) CONSTRUCTOR
    constructor(
        nombre: string,
        apellido: string,
        valorDNI: number
    ) {
        super(nombre, apellido);
        this._dni = valorDNI;
    }

    // * 3) PROPIEDADES
    public getDni(): number { return this._dni };
    public setDni(v: number): void { this._dni = v };

    // * 4) MÉTODOS
}