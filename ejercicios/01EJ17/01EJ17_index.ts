// src\01EJXX\01EJ17\01EJ17
/**
Lote de pruebas de elementos que tiene que mandar el scaner:
# con una Mamushka de madera de varios niveles
# un portafolios vacío de cuero
# un botiquín de plástico que contiene gasa y agua oxigenada
# una bolsa de cuero que contenga un peine y un botiquín.
*/

import { Objeto } from "./objeto";
import { Scanner } from "./scanner";


function main(): void {
    console.log("\n===== EJ 17 Scanner Juancito Jaquer =====\n");
    const scanner = new Scanner();
    /* 
        // # un portafolios vacío de cuero
        console.log("--- PortaFolios Vacio ---");
        const portafolios = new Objeto("Portafolios", "cuero", 1500);
        console.log(scanner.generarReporte(portafolios)); // Reporte
        console.log("");
    
        // # con una Mamushka de madera de varios niveles
        const m1 = new Objeto("Mamushka Grande", "madera", 500);
        const m2 = new Objeto("Mamushka Mediana", "madera", 300);
        const m3 = new Objeto("Mamushka Grande", "madera", 500);
    
        m1.agregarContenido(m2); // Agregamos m2 dentro de m1
        m2.agregarContenido(m3); // Agregamos m3 dentro de m2
        // En este punto tenemos una mamushka de 3 una dentro de la otra como el grafo de diseño
        console.log("--- Mamushka 3 niveles ---");
        console.log(scanner.generarReporte(m1));
        console.log(scanner.generarReporte(m2));
        console.log(scanner.generarReporte(m3));
        console.log("");
    
        // Botiquin Plastico con gasa + agua Oxigenada
        // Botiquien: CONTENEDOR | Gasa: CONTENIDO | Agua: CONTENIDO
    
        const botiquin = new Objeto("Botiquin", "plastico", 800);
        const gasa = new Objeto("Gasa", "textil", 100);
        const aguaOxigenada = new Objeto("Agua Oxigenada", "liquido", 100);
        botiquin.agregarContenido(gasa);
        botiquin.agregarContenido(aguaOxigenada);
    
        console.log("--- Botiquien: CONTENEDOR | Gasa: CONTENIDO | Agua: CONTENIDO ---");
        console.log(scanner.generarReporte(botiquin));
        console.log(scanner.generarReporte(gasa));
        console.log(scanner.generarReporte(aguaOxigenada));
        console.log("");
     */
    // Bolsa de cuero que contenga peine y un botiquin 2
    // Bolsa: CONTENEDOR | Peine: CONTENIDO | botiquin: CONTENIDO o SAMBUCHITO
    const bolsa = new Objeto("Bolsa", "cuero", 2000);
    const peine = new Objeto("Peine", "plastico", 300);
    const botiquin2 = new Objeto("Botiquin 2", "plastico", 1000);
    const moneda = new Objeto("Moneda", "metal", 50);
    bolsa.agregarContenido(peine);
    bolsa.agregarContenido(botiquin2); // despues probamos una salida con sambuchito
    botiquin2.agregarContenido(moneda); // Agregamos la moneda dentro del botiquin 2

    console.log("--- Bolsa: CONTENEDOR | Peine: CONTENIDO | botiquin: CONTENIDO o SAMBUCHITO ---");
    console.log(scanner.generarReporte(bolsa));
    console.log(scanner.generarReporte(peine));
    console.log(scanner.generarReporte(botiquin2));
    console.log(scanner.generarReporte(moneda));
    console.log("");
}
main();