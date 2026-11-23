// ejercicios/01EJ15_marina/navio/hospital/lanchaMedica.ts
import { Navio } from "../navio";

export class LanchaMedica extends Navio {
    private _maniobrabilidad: string;
    private _tipoMotor: string;
    private _capacidadGrua: number;

    constructor(
        nombre: string,
        flotabilidad: string,
        estabilidad: string,
        maniobrabilidad: string,
        tipoMotor: string,
        capacidadGrua: number
    ) {
        super(nombre, flotabilidad, estabilidad);
        this._maniobrabilidad = maniobrabilidad;
        this._tipoMotor = tipoMotor;
        this._capacidadGrua = capacidadGrua;
    }

    public getManiobrabilidad(): string { return this._maniobrabilidad; }
    public getTipoMotor(): string { return this._tipoMotor; }
    public getCapacidadGrua(): number { return this._capacidadGrua; }
}
