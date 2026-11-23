import { Item } from "./item";

export default class Bicicleta extends Item {
    private _rodado: number;
    private _esElectrica: boolean;
    private _cantidadCambios: number;
    private _esPlegable: boolean;

    constructor(
        descripcion: string,
        alto: number,
        ancho: number,
        profundidad: number,
        numeroIdentificador: number,
        rodado: number,
        esElectrica: boolean,
        cantidadCambios: number,
        esPlegable: boolean
    ) {
        super(descripcion, alto, ancho, profundidad, numeroIdentificador);
        this._rodado = rodado;
        this._esElectrica = esElectrica;
        this._cantidadCambios = cantidadCambios;
        this._esPlegable = esPlegable;
    }

    public getRodado(): number {
        return this._rodado;
    }

    public getEsElectrica(): boolean {
        return this._esElectrica;
    }

    public getCantidadCambios(): number {
        return this._cantidadCambios;
    }

    public getEsPlegable(): boolean {
        return this._esPlegable;
    }
}
