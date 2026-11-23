import { Item } from "./item";

export default class Heladera extends Item {
    private _voltaje: number;
    private _poseeFreezer: boolean;

    constructor(
        descripcion: string,
        alto: number,
        ancho: number,
        profundidad: number,
        numeroIdentificador: number,
        voltaje: number,
        poseeFreezer: boolean
    ) {
        super(descripcion, alto, ancho, profundidad, numeroIdentificador);
        this._voltaje = voltaje;
        this._poseeFreezer = poseeFreezer;
    }

    public getVoltaje(): number {
        return this._voltaje;
    }

    public getPoseeFreezer(): boolean {
        return this._poseeFreezer;
    }
}
