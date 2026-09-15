// \src\01EJXX\01EJ16_logistica\item\heladera.ts

import { Item } from "./item";
import { Dimensiones } from "../dimensiones/dimensiones";
import { IConVoltaje } from "../interfaces/IConVoltaje";

export default class Heladera extends Item implements IConVoltaje {
    private _voltaje: number;
    private _poseeFreezer: boolean;

    constructor(
        id: number,
        descripcion: string,
        dimensiones: Dimensiones,
        voltaje: number,
        poseeFreezer: boolean
    ) {
        super(id, descripcion, dimensiones);
        this._voltaje = voltaje;
        this._poseeFreezer = poseeFreezer;
    }

    public getVoltaje(): number {
        return this._voltaje;
    }
    public setVoltaje(value: number): void {
        this._voltaje = value;
    }

    public getPoseeFreezer(): boolean {
        return this._poseeFreezer;
    }
    public setPoseeFreezer(value: boolean): void {
        this._poseeFreezer = value;
    }

}