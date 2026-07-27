// articulo.ts
export default class Articulo {
    private _marca: string = "";
    private _modelo: string = "";
    //
    public setMarca(v: string): void { this._marca = v };
    public setModelo(v: string): void { this._modelo = v };
}