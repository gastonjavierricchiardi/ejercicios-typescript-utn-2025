import { Articulo } from "./articulo";

export class DetalleListaPrecio {
    private _articulo: Articulo;
    private _precioVenta: number;

    constructor(articulo: Articulo, precioVenta: number) {
        this._articulo = articulo;
        this._precioVenta = precioVenta;
    }

    public getArticulo(): Articulo {
        return this._articulo;
    }

    public getPrecioVenta(): number {
        return this._precioVenta;
    }
}
