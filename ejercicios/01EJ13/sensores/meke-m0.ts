// \01EJ13\sensores\meke-m0.ts

export class MekeM0 {
    // 1) ATRIBUTOS
    private _tempActual: number;

    // 2) CONSTRUCTOR
    constructor(tempActual: number) {
        this._tempActual = tempActual;
    }

    // 3) PROPIEDADES (GET/SET)
    getTempActual(): number {
        return this._tempActual;
    }

    setTempActual(tempActual: number): void {
        this._tempActual = tempActual;
    }

    // 4) METODOS (Comportamiento)
    leerTemperatura(): number {
        return this.getTempActual();
    }
}
