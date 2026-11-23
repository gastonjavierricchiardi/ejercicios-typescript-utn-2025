import { Item } from "./item";
import { TipoPantalla } from "./tipoPantalla";

export default class Televisor extends Item {
    private _voltaje: number;
    private _tipoPantalla: TipoPantalla;
    private _esInteligente: boolean;

    constructor(
        descripcion: string,
        alto: number,
        ancho: number,
        profundidad: number,
        numeroIdentificador: number,
        voltaje: number,
        tipoPantalla: TipoPantalla,
        esInteligente: boolean
    ) {
        super(descripcion, alto, ancho, profundidad, numeroIdentificador);
        this._voltaje = voltaje;
        this._tipoPantalla = tipoPantalla;
        this._esInteligente = esInteligente;
    }

    public getVoltaje(): number {
        return this._voltaje;
    }

    public getTipoPantalla(): TipoPantalla {
        return this._tipoPantalla;
    }

    public getEsInteligente(): boolean {
        return this._esInteligente;
    }
}
