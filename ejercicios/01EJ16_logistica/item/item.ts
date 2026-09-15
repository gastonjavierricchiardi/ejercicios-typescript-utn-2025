// \src\01EJXX\01EJ16_logistica\item\item.ts

import { Dimensiones } from "../dimensiones/dimensiones";

export abstract class Item {
    private _id: number;
    private _descripcion: string;
    private _dimensiones: Dimensiones;

    constructor(id: number, descripcion: string, dimensiones: Dimensiones) {
        this._id = id;
        this._descripcion = descripcion;
        this._dimensiones = dimensiones;
    }

    public getId(): number {
        return this._id;
    }

    public setId(value: number): void {
        this._id = value;
    }

    public getDescripcion(): string {
        return this._descripcion;
    }

    public setDescripcion(value: string): void {
        this._descripcion = value;
    }
    public getDimensiones(): Dimensiones {
        return this._dimensiones;
    }
    public setDimensiones(value: Dimensiones): void {
        this._dimensiones = value;
    }

}