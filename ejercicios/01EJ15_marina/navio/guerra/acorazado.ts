// ejercicios/01EJ15_marina/navio/guerra/acorazado.ts
import { Navio } from "../navio";

export class Acorazado extends Navio {
    private _solidez: string;
    private _blindaje: string;
    private _potenciaFuego: string;
    private _velocidadCrucero: number;

    constructor(
        nombre: string,
        flotabilidad: string,
        estabilidad: string,
        solidez: string,
        blindaje: string,
        potenciaFuego: string,
        velocidadCrucero: number
    ) {
        super(nombre, flotabilidad, estabilidad);
        this._solidez = solidez;
        this._blindaje = blindaje;
        this._potenciaFuego = potenciaFuego;
        this._velocidadCrucero = velocidadCrucero;
    }

    public getSolidez(): string { return this._solidez; }
    public getBlindaje(): string { return this._blindaje; }
    public getPotenciaFuego(): string { return this._potenciaFuego; }
    public getVelocidadCrucero(): number { return this._velocidadCrucero; }
}
