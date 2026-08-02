
export default abstract class ProductoAbstracto
{
    private _talle: number;
    public get talle(): number {
        return this._talle;
    }
    public set talle(value: number) {
        this._talle = value;
    }
    private _material: string;
    public get material(): string {
        return this._material;
    }
    public set material(value: string) {
        this._material = value;
    }
    private _color: string;
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    private _tipo: string;
    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }

    


}