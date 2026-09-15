// \src\01EJXX\01EJ16_logistica\item\bicicleta.ts

import { Item } from "./item";
import { Dimensiones } from "../dimensiones/dimensiones";

export default class Bicicleta extends Item {
    private _rodado: number;
    private _esElectrica: boolean;
    private _cantidadCambios: number;
    private readonly _esPlegable: boolean;

    constructor(
        id: number,
        descripcion: string,
        dimensiones: Dimensiones,
        rodado: number,
        esElectrica: boolean,
        cantidadCambios: number,
        esPlegable: boolean
    ) {
        super(id, descripcion, dimensiones);
        this._rodado = rodado;
        this._esElectrica = esElectrica;
        this._cantidadCambios = cantidadCambios;
        this._esPlegable = esPlegable;
    }

    public getEsPlegable(): boolean {
        return this._esPlegable;
    }

    public getRodado(): number {
        return this._rodado;
    }
    public setRodado(value: number): void {
        this._rodado = value;
    }

    public getEsElectrica(): boolean {
        return this._esElectrica;
    }
    public setEsElectrica(value: boolean): void {
        this._esElectrica = value;
    }

    public getCantidadCambios(): number {
        return this._cantidadCambios;
    }
    public setCantidadCambios(value: number): void {
        this._cantidadCambios = value;
    }




}