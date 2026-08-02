import Figura from "./figura";

export default class Triangulo extends Figura {

    private _lado1: number;
    private _lado2: number;
    private _lado3: number;

    public constructor(nombre: string, color: string, lado1: number, lado2: number, lado3: number) {
        super(nombre, color);
        this._lado1 = lado1;
        this._lado2 = lado2;
        this._lado3 = lado3;
    }

    public getPerimetro(): number {
        return this._lado1 + this._lado2 + this._lado3;
    }
    
    public getArea(): number {
        throw new Error("Method not implemented.");
    }

}