import { IMolinete } from "./iMolinete";
import { GiraMax } from "./giraMax";

export class GiraMaxAdapter implements IMolinete {
    private _giramax: GiraMax;

    constructor(giramax: GiraMax) {
        this._giramax = giramax;
    }

    public obtenerIngresos(): number {
        return this._giramax.getInboundAccess();
    }

    public obtenerEgresos(): number {
        return this._giramax.getOutboundAccess();
    }
}
