import { IMolinete } from "./iMolinete";
import { Rotativity } from "./rotativity";

export class RotativityAdapter implements IMolinete {
    private _rotativity: Rotativity;

    constructor(rotativity: Rotativity) {
        this._rotativity = rotativity;
    }

    public obtenerIngresos(): number {
        return this._rotativity.getUsage()[0];
    }

    public obtenerEgresos(): number {
        return this._rotativity.getUsage()[1];
    }
}
