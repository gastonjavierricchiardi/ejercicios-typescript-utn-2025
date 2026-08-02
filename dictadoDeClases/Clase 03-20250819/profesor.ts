import Persona from "./persona";

export default class Profesor extends Persona {
    private _cargaHoraria: number;

     constructor(apellido: string, nombre: string, edad: number = 0, cargaHoraria: number) {
        super(apellido,nombre,edad);
        this._cargaHoraria = cargaHoraria;
    }

    public get cargaHoraria(): number {
        return this._cargaHoraria;
    }

    public mostrarInfo(): string {
        return `${this.nombreCompleto} edad: ${this.edad} carga horaria: ${this._cargaHoraria}`;
    }
}