// \src\01EJXX\01EJ16_logistica\01EJ16_index.ts
import Auto from "./vehiculo/auto";
import Camioneta from "./vehiculo/camioneta";



import { Dimensiones } from "./dimensiones/dimensiones";


import Televisor from "./item/televisor";
import Bicicleta from "./item/bicicleta";
import CajaPequena from "./item/cajaPequena";

import Comoda from "./item/comoda";
import Heladera from "./item/heladera";
import Lavarropas from "./item/lavarropas";

function main(): void {
    console.log("===== EJ16 Logística =====");
    // Cada vehículo configura su estrategia de carga
    const auto = new Auto();
    const camioneta = new Camioneta();

    // Dimensiones (valores de ejemplo) 
    const dimTv = new Dimensiones(10, 80, 5);
    const dimBici = new Dimensiones(100, 30, 170);
    const dimCaja = new Dimensiones(20, 20, 20);
    const dimComoda = new Dimensiones(90, 120, 45);
    const dimHeladera = new Dimensiones(180, 70, 65);
    const dimLavarropas = new Dimensiones(95, 60, 60);

    // Items (valores de ejemplo) 
    const tv = new Televisor(1, "Televisor 50 pulgadas", dimTv, 220, "LED", true);
    const bici = new Bicicleta(2, "Bicicleta plegable", dimBici, 29, false, 21, true);
    const biciNoPlegable = new Bicicleta(10, "Bicicleta no plegable", dimBici, 29, false, 21, false);
    const caja1 = new CajaPequena(3, "Caja chica", dimCaja);
    const comoda = new Comoda(4, "Cómoda de madera", dimComoda, 2.5, 6);
    const heladera = new Heladera(5, "Heladera familiar", dimHeladera, 220, true);
    const lavarropas = new Lavarropas(6, "Lavarropas automático", dimLavarropas, 220, 8, 1200);

    console.log("\n--- Prueba Auto (permitidos + no permitido) ---");
    auto.cargar(tv);       // OK 
    auto.cargar(bici);     // OK: es plegable
    auto.cargar(biciNoPlegable); // NO: no es plegable
    auto.cargar(caja1);    // OK 
    auto.cargar(heladera); // NO (criterio) 

    console.log("\n--- Prueba Camioneta (permitidos + no permitido) ---");
    camioneta.cargar(comoda);    // OK 
    camioneta.cargar(heladera);  // OK 
    camioneta.cargar(lavarropas);// OK 
    camioneta.cargar(tv);        // NO (criterio) 

    console.log("\n--- Prueba capacidad Auto (máx 5) ---");
    const caja2 = new CajaPequena(7, "Caja chica 2", dimCaja);
    const caja3 = new CajaPequena(8, "Caja chica 3", dimCaja);
    const caja4 = new CajaPequena(9, "Caja chica 4", dimCaja);

    auto.cargar(caja2); // OK (4to) 
    auto.cargar(caja3); // OK (5to) 
    auto.cargar(caja4); // NO (capacidad) 

    console.log("\n--- Listados ---");
    auto.listarItems();
    camioneta.listarItems();
}

main(); 