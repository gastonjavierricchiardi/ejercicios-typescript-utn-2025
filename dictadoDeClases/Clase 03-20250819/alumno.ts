import Persona from "./persona";

export default class Alumno extends Persona {
    
    private _legajo: string;

    constructor(apellido: string, nombre: string, edad: number = 0, legajo: string) {
        super(apellido,nombre,edad);
        this._legajo = legajo;
    }

    public get legajo(): string {
        return this._legajo;
    }

    public set legajo(value: string) {
        this._legajo = value;
    }

    public mostrarInfo(): string {
        return `${this.nombreCompleto} edad: ${this.edad} legajo: ${this.legajo}`;
    }
}