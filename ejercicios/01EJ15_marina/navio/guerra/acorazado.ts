// \01EJ15_marina\navio\guerra\acorazado.ts
import { Navio } from "../navio";
import { IArmado, IBlindado } from "../capacidades/interfaces";

export class Acorazado extends Navio implements IArmado, IBlindado {
    private _blindaje: number;
    private _potenciaFuego: number;

    constructor(
        nombre: string,
        flotabilidad: number,
        solidez: number,
        estabilidad: number,
        velocidadCrucero: number,
        blindaje: number,
        potenciaFuego: number
    ) {
        super(nombre, flotabilidad, solidez, estabilidad, velocidadCrucero);
        this._blindaje = blindaje;
        this._potenciaFuego = potenciaFuego;
    }
    // IBlindado
    public getBlindaje(): number {
        return this._blindaje;
    }
    public setBlindaje(value: number): void {
        this._blindaje = value;
    }
    // IArmado
    public getPotenciaFuego(): number {
        return this._potenciaFuego;
    }
    public setPotenciaFuego(value: number): void {
        this._potenciaFuego = value;
    }
}