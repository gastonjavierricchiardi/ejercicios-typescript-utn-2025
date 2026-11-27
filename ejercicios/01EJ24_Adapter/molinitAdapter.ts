import { IMolinete } from "./iMolinete";
import { Molinit } from "./molinit";

export class MolinitAdapter implements IMolinete {
    private _molinit: Molinit;

    constructor(molinit: Molinit) {
        this._molinit = molinit;
    }

    public obtenerIngresos(): number {
        return this._molinit.obtenerEntrada();
    }

    public obtenerEgresos(): number {
        return this._molinit.obtenerSalida();
    }
}
