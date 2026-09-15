// \src\01EJXX\01EJ16_logistica\item\televisor.ts

import { Item } from "./item";
import { Dimensiones } from "../dimensiones/dimensiones";
import { IConVoltaje } from "../interfaces/IConVoltaje";

export default class Televisor extends Item implements IConVoltaje {
    private _voltaje: number;
    private _tipoPantalla: string; // LCD o LED
    private _esInteligente: boolean;

    constructor(
        id: number,
        descripcion: string,
        dimensiones: Dimensiones,
        voltaje: number,
        tipoPantalla: string,
        esInteligente: boolean
    ) {
        super(id, descripcion, dimensiones);
        this._voltaje = voltaje;
        this._tipoPantalla = tipoPantalla;
        this._esInteligente = esInteligente
    }

    public getVoltaje(): number {
        return this._voltaje;
    }
    public setVoltaje(value: number): void {
        this._voltaje = value;
    }

    public getTipoPantalla(): string {
        return this._tipoPantalla;
    }
    public setTipoPantalla(value: string): void {
        this._tipoPantalla = value;
    }

    public getEsInteligente(): boolean {
        return this._esInteligente;
    }
    public setEsInteligente(value: boolean): void {
        this._esInteligente = value;
    }
}