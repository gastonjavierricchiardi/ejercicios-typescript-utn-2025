// articulo.ts
export default class Articulo {
    private _marca: string = "";
    private _modelo: string = "";

    public setMarca(v: string): void { this._marca = v };
    public setModelo(v: string): void { this._modelo = v };

}
/**
 * un muy mal error de mi parte, confundí  Setters con Getters 
public get marca(): string {
    return this._marca
    }
    
    public get modelo(): string {
        return this._modelo
    }
        
        
// el siguiente problema es que no tenia que tener constructor
constructor(v_marca: string, v_modelo: string) {
    this._marca = v_marca;
    this._modelo = v_modelo;
    }
*/