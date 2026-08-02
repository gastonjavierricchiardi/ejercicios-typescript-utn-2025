// \01EJ15_marina\navio\guerra\destructor.ts
import { Navio } from "../navio";
import { IArmado } from "../capacidades/interfaces";

export class Destructor extends Navio implements IArmado {
    private _potenciaFuego: number;
    private _maniobrabilidad: number;
    private _velocidadMaxima: number;

    constructor(
        nombre: string,
        flotabilidad: number,
        solidez: number,
        estabilidad: number,
        velocidadCrucero: number,
        potenciaFuego: number,
        maniobrabilidad: number,
        velocidadMaxima: number
    ) {
        super(nombre, flotabilidad, solidez, estabilidad, velocidadCrucero);
        this._potenciaFuego = potenciaFuego;
        this._maniobrabilidad = maniobrabilidad;
        this._velocidadMaxima = velocidadMaxima;
    }

    public getVelocidadMaxima(): number {
        return this._velocidadMaxima;
    }

    public setVelocidadMaxima(value: number): void {
        this._velocidadMaxima = value;
    }

    public getManiobrabilidad(): number {
        return this._maniobrabilidad;
    }

    public setManiobrabilidad(value: number): void {
        this._maniobrabilidad = value;
    }

    // IArmado
    public getPotenciaFuego(): number {
        return this._potenciaFuego;
    }
    public setPotenciaFuego(value: number): void {
        this._potenciaFuego = value;
    }
}