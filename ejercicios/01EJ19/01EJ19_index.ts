import { Articulo } from "./articulo";
import { Empresa } from "./empresa";
import { ListaPrecio } from "./listaPrecio";
import { TipoListaPrecio } from "./tipoListaPrecio";

function main(): void {
    const empresa = new Empresa();

    const mesa = new Articulo("Mesa", 100000, "Madera de roble");
    const silla = new Articulo("Silla", 30000);
    const armario = new Articulo("Armario", 180000, "Dos puertas");

    empresa.darDeAlta(mesa);
    empresa.darDeAlta(silla);
    empresa.darDeAlta(armario);

    const mayorista = new ListaPrecio("Mayorista 2026", "2026-12-31", TipoListaPrecio.MAYORISTA);
    const minorista = new ListaPrecio("Minorista 2026", "2026-12-31", TipoListaPrecio.MINORISTA);

    mayorista.agregarArticulo(mesa, 140000);
    mayorista.agregarArticulo(silla, 45000);
    mayorista.agregarArticulo(armario, 250000);

    minorista.agregarArticulo(mesa, 170000);
    minorista.agregarArticulo(silla, 60000);
    minorista.agregarArticulo(armario, 310000);

    empresa.agregarListaPrecio(mayorista);
    empresa.agregarListaPrecio(minorista);

    console.log("=== Artículos ===");
    for (const articulo of empresa.getArticulos()) {
        console.log(`Nombre: ${articulo.getNombre()}`);
        console.log(`Costo de producción: ${articulo.getCostoProduccion()}`);
        console.log(`Observación: ${articulo.getObservacion() || "Sin observaciones"}`);
        console.log();
    }

    console.log("=== Listas de precios ===");
    for (const lista of empresa.getListaDePrecio()) {
        console.log(`Nombre: ${lista.getNombre()}`);
        console.log(`Fecha tope de vigencia: ${lista.getFechaTopeVigencia()}`);
        console.log(`Tipo: ${TipoListaPrecio[lista.getTipo()]}`);

        for (const detalle of lista.getDetalles()) {
            console.log(`Artículo: ${detalle.getArticulo().getNombre()} | Precio de venta: ${detalle.getPrecioVenta()}`);
        }
        console.log();
    }
}

main();
