import ProductoAbstracto from "./productoAbstracto";

export default class ZapatoUrbanoConcreto extends ProductoAbstracto
{
    private _marca: string;
    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }

    /*
     private _talle: number;
    public get talle(): number {
        return this._talle;
    }
    public set talle(value: number) {
        this._talle = value;
    }



    */

    constructor (pTipo : string, pColor : string, pMaterial : string, pTalle : number, pMarca : string)
    {
        super();
        this.color=pColor;
        this._marca=pMarca;
        this.material=pMaterial;
        this.talle = pTalle;

    }

}