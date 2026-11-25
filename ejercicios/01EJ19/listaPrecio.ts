import { Articulo } from "./articulo";
import { DetalleListaPrecio } from "./detalleListaPrecio";
import { TipoListaPrecio } from "./tipoListaPrecio";

export class ListaPrecio {
    private _nombre: string;
    private _fechaTopeVigencia: string;
    private _tipo: TipoListaPrecio;
    private _detalles: DetalleListaPrecio[];

    constructor(nombre: string, fechaTopeVigencia: string, tipo: TipoListaPrecio) {
        this._nombre = nombre;
        this._fechaTopeVigencia = fechaTopeVigencia;
        this._tipo = tipo;
        this._detalles = [];
    }

    public getNombre(): string {
        return this._nombre;
    }

    public getFechaTopeVigencia(): string {
        return this._fechaTopeVigencia;
    }

    public getTipo(): TipoListaPrecio {
        return this._tipo;
    }

    public getDetalles(): DetalleListaPrecio[] {
        return [...this._detalles];
    }

    public agregarArticulo(articulo: Articulo, precioVenta: number): void {
        this._detalles.push(new DetalleListaPrecio(articulo, precioVenta));
    }
}
