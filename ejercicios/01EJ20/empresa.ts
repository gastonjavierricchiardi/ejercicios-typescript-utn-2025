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
        try {
            articulo.validarDatos(
                articulo.getNombre(),
                articulo.getCostoProduccion(),
                articulo.getObservacion()
            );
        } catch (error) {
            if (!(error instanceof Error)) {
                throw error;
            }
            console.log(`Alta rechazada para "${articulo.getNombre()}": ${error.message}`);
            return;
        }

        this._articulos.push(articulo);
    }

    public agregarListaPrecio(lista: ListaPrecio): void {
        this._listaDePrecio.push(lista);
    }

    public ajustarPrecios(): void {
        for (const lista of this._listaDePrecio) {
            const detalles = lista.getDetalles();
            if (detalles.length === 0) {
                continue;
            }

            let precioMayor = detalles[0].getPrecioVenta();
            for (const detalle of detalles) {
                if (detalle.getPrecioVenta() > precioMayor) {
                    precioMayor = detalle.getPrecioVenta();
                }
            }

            // Se conserva el cociente sin redondearlo a menos decimales.
            const precioMinimo = precioMayor / 1.30;
            for (const detalle of detalles) {
                if (detalle.getPrecioVenta() < precioMinimo) {
                    detalle.actualizarPrecio(precioMinimo);
                }
            }
        }
    }
}
