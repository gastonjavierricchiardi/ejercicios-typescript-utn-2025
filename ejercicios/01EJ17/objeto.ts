// src\01EJXX\01EJ17\01EJ17

import { Material } from "./types/materiales";
import { Clasificacion } from "./types/clasificacion";

export class Objeto {
    private _nombre: string;
    private _material: Material;
    private _volumen: number;

    // Jeraraquía de contención
    private _contenidos: Objeto[];
    private _padre: Objeto | null;

    // constructor
    constructor(nombre: string, material: Material, volumen: number) {
        this._nombre = nombre;
        this._material = material;
        this._volumen = volumen;

        this._contenidos = [];
        this._padre = null;
    }
    // getters
    public getNombre(): string {
        return this._nombre;
    }

    public getMaterial(): Material {
        return this._material;
    }

    public getVolumen(): number {
        return this._volumen;
    }

    /* public setNombre(value: string): void {
        this._nombre = value;
    }
    public setMaterial(value: Material): void {
        this._material = value;
    }
    public setVolumen(value: number): void {
        this._volumen = value;
    } */

    // Jerarquía (Contenido / Padre)
    public agregarContenido(hijo: Objeto): void {
        // hijo._padre = this; // como normal
        hijo.asignarPadre(this); // ENCAPSULADO mas sujeto a la catedra
        this._contenidos.push(hijo);
    }
    // Viene de la encapsulación de arriba
    private asignarPadre(padre: Objeto): void {
        this._padre = padre;
    }

    public getPadre(): Objeto | null {
        return this._padre;
    }

    public getContenidos(): Objeto[] {
        return this._contenidos;
    }

    // Sensores lógicos

    private get contieneAlgo(): boolean {
        return this._contenidos.length > 0;
    }

    private get estaContenido(): boolean {
        return this._padre !== null;
    }

    // CLASIFICACION
    public getTipo(): Clasificacion {
        if (this.contieneAlgo && this.estaContenido) {
            return "Sambuchito";
        }
        if (this.contieneAlgo) {
            return "Contenedor";
        }
        if (this.estaContenido) {
            return "Contenido";
        }
        return "Simple";
    }
}