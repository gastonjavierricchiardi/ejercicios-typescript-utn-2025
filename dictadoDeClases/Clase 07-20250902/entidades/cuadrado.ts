import Figura from "./figura"

export default class Cuadrado extends Figura {

    private _lado: number;

    public constructor(nombre: string, color: string, lado: number) {
        super(nombre, color);
        this._lado = lado;
    }

    public get lado(): number {
        return this._lado;
    }

    public set lado(value: number) {
        this._lado = value;
    }

    public getPerimetro(): number {
        return this._lado * 4;
    }
    
    public getArea(): number {
        return this._lado * this._lado;
    }
}