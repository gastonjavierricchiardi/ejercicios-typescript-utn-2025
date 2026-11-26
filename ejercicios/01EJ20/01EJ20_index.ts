import { Articulo } from "./articulo";
import { Empresa } from "./empresa";
import { ListaPrecio } from "./listaPrecio";
import { TipoListaPrecio } from "./tipoListaPrecio";

function mostrarListas(empresa: Empresa): void {
    for (const lista of empresa.getListaDePrecio()) {
        console.log(`Lista: ${lista.getNombre()}`);
        console.log(`Tipo: ${TipoListaPrecio[lista.getTipo()]}`);
        console.log(`Fecha tope de vigencia: ${lista.getFechaTopeVigencia()}`);
        for (const detalle of lista.getDetalles()) {
            console.log(`${detalle.getArticulo().getNombre()}: ${detalle.getPrecioVenta()}`);
        }
        console.log();
    }
}

function main(): void {
    const empresa = new Empresa();
    const mesa = new Articulo("Mesa", 40);
    const silla = new Articulo("Silla", 25, "Madera clara");
    const armario = new Articulo("Armario", 90);
    const limite = new Articulo("Estante modular", 1, "Observación de treinta letras!");

    console.log("=== Validación del alta ===");
    empresa.darDeAlta(mesa);
    empresa.darDeAlta(silla);
    empresa.darDeAlta(armario);
    empresa.darDeAlta(limite);
    empresa.darDeAlta(new Articulo("", 10));
    empresa.darDeAlta(new Articulo("Estante especial", 10));
    empresa.darDeAlta(new Articulo("Banco", 0));
    empresa.darDeAlta(new Articulo("Repisa", -1));
    empresa.darDeAlta(new Articulo("Cómoda", 10, "Observación de treinta letras!!"));
    empresa.darDeAlta(new Articulo("", 0, "Observación de treinta letras!!"));

    console.log(`\n=== Artículos registrados: ${empresa.getArticulos().length} ===`);
    for (const articulo of empresa.getArticulos()) {
        console.log(`Nombre: ${articulo.getNombre()}`);
        console.log(`Costo de producción: ${articulo.getCostoProduccion()}`);
        console.log(`Observación: ${articulo.getObservacion() || "Sin observaciones"}`);
        console.log();
    }

    const mayorista = new ListaPrecio("Mayorista", "2026-12-31", TipoListaPrecio.MAYORISTA);
    mayorista.agregarArticulo(mesa, 50);
    mayorista.agregarArticulo(silla, 80);
    mayorista.agregarArticulo(armario, 130);

    const minorista = new ListaPrecio("Minorista", "2026-12-31", TipoListaPrecio.MINORISTA);
    minorista.agregarArticulo(mesa, 100);
    minorista.agregarArticulo(silla, 220);
    minorista.agregarArticulo(armario, 260);

    empresa.agregarListaPrecio(mayorista);
    empresa.agregarListaPrecio(minorista);

    console.log("=== Precios antes del ajuste ===");
    mostrarListas(empresa);
    empresa.ajustarPrecios();
    console.log("=== Precios después del ajuste ===");
    mostrarListas(empresa);
}

main();
