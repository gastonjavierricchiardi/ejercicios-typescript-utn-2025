import { Item } from "./item";

export default class Lavarropas extends Item {
    private _voltaje: number;
    private _carga: number;
    private _revolucionesCentrifugado: number;

    constructor(
        descripcion: string,
        alto: number,
        ancho: number,
        profundidad: number,
        numeroIdentificador: number,
        voltaje: number,
        carga: number,
        revolucionesCentrifugado: number
    ) {
        super(descripcion, alto, ancho, profundidad, numeroIdentificador);
        this._voltaje = voltaje;
        this._carga = carga;
        this._revolucionesCentrifugado = revolucionesCentrifugado;
    }

    public getVoltaje(): number {
        return this._voltaje;
    }

    public getCarga(): number {
        return this._carga;
    }

    public getRevolucionesCentrifugado(): number {
        return this._revolucionesCentrifugado;
    }
}
