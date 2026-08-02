// \01EJ15_marina\navio\hospital\barcoHospital.ts

import { Navio } from "../navio";
import { IHospital } from "../capacidades/interfaces";

export class BarcoHospital extends Navio implements IHospital {
    private static _INSTANCE: BarcoHospital;
    private _capacidadPacientes: number;

    public static getInstance(): BarcoHospital {
        if (!BarcoHospital._INSTANCE) {
            BarcoHospital._INSTANCE = new BarcoHospital();
        }
        return BarcoHospital._INSTANCE;
    }

    private constructor() {
        // nombre fijo: "Sibelancia"
        // valores altos para flotabilidad/estabilidad (según enunciado)
        super("Sibelancia", 100, 80, 100, 35);
        this._capacidadPacientes = 75;
    }

    // IHospital
    public getCapacidadPacientes(): number {
        return this._capacidadPacientes;
    }

    public setCapacidadPacientes(value: number): void {
        this._capacidadPacientes = value;
    }
}
