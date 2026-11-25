import { Articulo } from "./articulo";
import { ListaPrecio } from "./listaPrecio";

export class Empresa {
    private _articulos: Articulo[] = [];
    private _listaDePrecio: ListaPrecio[] = [];

    public getArticulos(): Articulo[] {
        return [...this._articulos];
    }

    public getListaDePrecio(): ListaPrecio[] {
        return [...this._listaDePrecio];
    }

    public darDeAlta(articulo: Articulo): void {
        this._articulos.push(articulo);
    }

    public agregarListaPrecio(lista: ListaPrecio): void {
        this._listaDePrecio.push(lista);
    }
}
