// \01EJ15_marina\navio\hospital\lanchaMedica.ts

import { Navio } from "../navio";
import { IMotorFueraBorda, IConGrua } from "../capacidades/interfaces";

export class LanchaMedica extends Navio implements IMotorFueraBorda, IConGrua {
    private _maniobrabilidad: number;
    private _motorFueraBorda: boolean;
    private _capacidadGruaKg: number; // para 300Kg

    constructor(
        nombre: string,
        flotabilidad: number,
        solidez: number,
        estabilidad: number,
        velocidadCrucero: number,
        maniobrabilidad: number,
        motorFueraBorda: boolean,
        capacidadGruaKg: number
    ) {
        super(nombre, flotabilidad, solidez, estabilidad, velocidadCrucero);
        this._maniobrabilidad = maniobrabilidad;
        this._motorFueraBorda = motorFueraBorda;
        this._capacidadGruaKg = capacidadGruaKg;
    }

    public getManiobrabilidad(): number {
        return this._maniobrabilidad;
    }

    public setManiobrabilidad(value: number): void {
        this._maniobrabilidad = value;
    }

    public getMotorFueraBorda(): boolean {
        return this._motorFueraBorda;
    }

    public setMotorFueraBorda(value: boolean): void {
        this._motorFueraBorda = value;
    }

    public getCapacidadGruaKg(): number {
        return this._capacidadGruaKg;
    }

    public setCapacidadGruaKg(value: number): void {
        this._capacidadGruaKg = value;
    }
}