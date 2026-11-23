// ejercicios/01EJ15_marina/navio/guerra/destructor.ts
import { Navio } from "../navio";

export class Destructor extends Navio {
    private _solidez: string;
    private _potenciaFuego: string;
    private _maniobrabilidad: string;
    private _velocidadCrucero: number;

    constructor(
        nombre: string,
        flotabilidad: string,
        estabilidad: string,
        solidez: string,
        potenciaFuego: string,
        maniobrabilidad: string,
        velocidadCrucero: number
    ) {
        super(nombre, flotabilidad, estabilidad);
        this._solidez = solidez;
        this._potenciaFuego = potenciaFuego;
        this._maniobrabilidad = maniobrabilidad;
        this._velocidadCrucero = velocidadCrucero;
    }

    public getSolidez(): string { return this._solidez; }
    public getPotenciaFuego(): string { return this._potenciaFuego; }
    public getManiobrabilidad(): string { return this._maniobrabilidad; }
    public getVelocidadCrucero(): number { return this._velocidadCrucero; }
}
