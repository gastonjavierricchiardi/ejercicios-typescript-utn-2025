// \01EJ13\robot.ts

import { ITraccion } from "./tracciones/traccion";

export class Robot {
    // * 1) ATRIBUTOS
    private _nroSerie: string;
    private _traccionBase: number;

    // nuevo: ahora es un OBJETO (rueda/oruga), no un número
    private _traccionActual: ITraccion;

    // * 2) CONSTRUCTOR
    constructor(nroSerie: string, traccionBase: number, traccionActual: ITraccion) {
        this._nroSerie = nroSerie;
        this._traccionBase = traccionBase;
        this._traccionActual = traccionActual;
    }

    // * 3) PROPIEDADES (GET/SET)
    getNroSerie(): string { return this._nroSerie; }
    setNroSerie(nroSerie: string): void { this._nroSerie = nroSerie; }

    getTraccionBase(): number { return this._traccionBase; }
    setTraccionBase(traccionBase: number): void { this._traccionBase = traccionBase; }

    setTraccionActual(traccionActual: ITraccion): void { this._traccionActual = traccionActual; }

    // * 4) MÉTODOS (Comportamiento)
    public potenciaFinal(): number {
        return this._traccionBase - this._traccionActual.penalizacionHp();
    }

    public tipoTraccion(): string {
        return this._traccionActual.tipo();
    }

    public kmMaximos(): number {
        return this._traccionActual.kmMaximos();
    }

    public reporte(): string {
        let reporte = "";
        reporte += `Serie: ${this.getNroSerie()}\n`;
        reporte += `Potencia final: ${this.potenciaFinal()} hp\n`;
        reporte += `Tipo traccion: ${this.tipoTraccion()}\n`;
        reporte += `Puede avanzar: ${this.kmMaximos()} km\n`;

        const extra = this.infoExtra().trim();
        if (extra !== "") {
            reporte += `Extra: ${extra}\n`;
        }

        return reporte;
    }

    public infoExtra(): string {
        return this._traccionActual.infoExtra();
    }

}
