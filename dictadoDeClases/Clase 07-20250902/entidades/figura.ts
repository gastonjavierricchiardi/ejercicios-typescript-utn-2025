export default abstract class Figura {
    private _nombre: string;
    private _color: string;

    public constructor(nombre: string, color: string) {
        this._color = color;
        this._nombre = nombre;
    }

    public get color() {
        return this._color;
    }

    public set color(value: string) {
        this._color = value;
    }

    public get nombre() {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public abstract getPerimetro(): number;
    public abstract getArea(): number;
}