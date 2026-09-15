// \src\01EJXX\01EJ16_logistica\item\lavarropas.ts

import { Item } from "./item";
import { Dimensiones } from "../dimensiones/dimensiones";
import { IConVoltaje } from "../interfaces/IConVoltaje";

export default class Lavarropas extends Item implements IConVoltaje {
    private _voltaje: number;
    private _carga: number;
    private _rpmCentrifugado: number;

    constructor(
        id: number,
        descripcion: string,
        dimensiones: Dimensiones,
        voltaje: number,
        carga: number,
        rpmCentrifugado: number
    ) {
        super(id, descripcion, dimensiones);
        this._voltaje = voltaje;
        this._carga = carga;
        this._rpmCentrifugado = rpmCentrifugado;
    }

    public getVoltaje(): number {
        return this._voltaje;
    }
    public setVoltaje(value: number): void {
        this._voltaje = value;
    }

    public getCarga(): number {
        return this._carga;
    }
    public setCarga(value: number): void {
        this._carga = value;
    }

    public getRpmCentrifugado(): number {
        return this._rpmCentrifugado;
    }
    public setRpmCentrifugado(value: number): void {
        this._rpmCentrifugado = value;
    }
}