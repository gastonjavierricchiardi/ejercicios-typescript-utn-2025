// \01EJ14\dron\dron.ts
import { IHerramientas } from "../herramienta/iherramientas";

export class Dron {
    // 1) ATRIBUTOS
    private _velocidadBase: number;
    private _alturaBase: number;
    private _herramientaActual: IHerramientas;

    // 2) CONSTRUCTOR
    constructor(herramientaActual: IHerramientas) {
        this._velocidadBase = 5;
        this._alturaBase = 100;
        this._herramientaActual = herramientaActual;
    }

    // 3) SET/GET MÍNIMOS
    setHerramientaActual(herramientaActual: IHerramientas): void {
        this._herramientaActual = herramientaActual;
    }

    // 4) MÉTODOS (Comportamiento) - por ahora placeholder
    tipoHerramienta(): string {
        return this._herramientaActual.tipo();
    }

    velocidadActual(): number {
        const peso = this._herramientaActual.pesoGramos();

        if (peso <= 200) {
            return this._velocidadBase;
        }

        const exceso = peso - 200;
        const tramos = exceso / 50;          // 250->1, 300->2, 500->6
        const reduccion = tramos * 0.02;     // 2% por tramo

        return this._velocidadBase * (1 - reduccion);
    }

    alturaActual(): number {
        const peso = this._herramientaActual.pesoGramos();

        if (peso <= 200) {
            return this._alturaBase;
        }

        const exceso = peso - 200;
        const tramos = exceso / 50;        // 250->1, 300->2, 500->6
        const reduccion = tramos * 0.05;   // 5% por tramo

        return this._alturaBase * (1 - reduccion);
    }

    reporte(): string {
        let reporte = "";
        reporte += `Herramienta: ${this.tipoHerramienta()}\n`;
        reporte += `Velocidad: ${this.velocidadActual()} mts/s\n`;
        reporte += `Altura: ${this.alturaActual()} mts\n`;
        return reporte;
    }
}
