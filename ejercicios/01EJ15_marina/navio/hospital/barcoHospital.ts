// ejercicios/01EJ15_marina/navio/hospital/barcoHospital.ts
import { Navio } from "../navio";

export class BarcoHospital extends Navio {
    private _capacidadPacientes: number;

    constructor(
        nombre: string,
        flotabilidad: string,
        estabilidad: string,
        capacidadPacientes: number
    ) {
        super(nombre, flotabilidad, estabilidad);
        this._capacidadPacientes = capacidadPacientes;
    }

    public getCapacidadPacientes(): number { return this._capacidadPacientes; }
}
