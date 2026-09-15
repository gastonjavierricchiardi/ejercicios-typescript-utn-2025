// src\01EJXX\01EJ16\dimensiones\dimensiones.ts

export class Dimensiones {
    private _alto: number;
    private _ancho: number;
    private _profundidad: number;

    constructor(alto: number, ancho: number, profundidad: number) {
        this._alto = alto;
        this._ancho = ancho;
        this._profundidad = profundidad;
    }

    public getAlto(): number {
        return this._alto;
    }
    public setAlto(value: number): void {
        this._alto = value;
    }

    public getAncho(): number {
        return this._ancho;
    }
    public setAncho(value: number): void {
        this._ancho = value;
    }

    public getProfundidad(): number {
        return this._profundidad;
    }
    public setProfundidad(value: number): void {
        this._profundidad = value;
    }
}