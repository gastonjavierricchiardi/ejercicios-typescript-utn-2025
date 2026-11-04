// src\01EJXX\01EJ17\01EJ17
// Cumplimos son SRP (Single Responsibility Principle) --> el `Objeto` no imprime.

import { Objeto } from "./objeto";

export class Scanner {
    /**
     * generarReporte(obj:Objeto) :string    */
    public generarReporte(obj: Objeto): string {
        let reporte = "";
        reporte += `[${obj.getNombre()}]`;
        reporte += `Mat: ${obj.getMaterial()} |`;
        reporte += `Vol: ${obj.getVolumen()} cm3 | `;
        reporte += `Tipo: ${obj.getTipo()}`;
        return reporte;
    }
}