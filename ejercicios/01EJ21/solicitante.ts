export class Solicitante {
    private _dni: string;
    private _sueldoBruto: number;
    private _antiguedadEmpleadoActual: number;

    constructor(dni: string, sueldoBruto: number, antiguedadEmpleadoActual: number) {
        this._dni = dni;
        this._sueldoBruto = sueldoBruto;
        this._antiguedadEmpleadoActual = antiguedadEmpleadoActual;
    }

    public getDni(): string {
        return this._dni;
    }

    public getSueldoBruto(): number {
        return this._sueldoBruto;
    }

    public getAntiguedadEmpleadoActual(): number {
        return this._antiguedadEmpleadoActual;
    }
}
