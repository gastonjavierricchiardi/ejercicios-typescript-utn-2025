import Auto from "./vehiculo/auto";
import Camioneta from "./vehiculo/camioneta";
import Televisor from "./item/televisor";
import Bicicleta from "./item/bicicleta";
import CajaPequena from "./item/cajaPequena";
import Comoda from "./item/comoda";
import Heladera from "./item/heladera";
import Lavarropas from "./item/lavarropas";
import { TipoPantalla } from "./item/tipoPantalla";

function main(): void {
    const televisor = new Televisor(
        "Televisor", 0.60, 1.00, 0.10, 1, 220, TipoPantalla.LED, true
    );
    const bicicleta = new Bicicleta(
        "Bicicleta", 1.00, 1.70, 0.50, 2, 29, false, 21, true
    );
    const caja = new CajaPequena("Caja pequeña", 0.30, 0.30, 0.30, 3);
    const comoda = new Comoda("Cómoda", 0.90, 1.20, 0.50, 4, 1.08, 6);
    const heladera = new Heladera("Heladera", 1.80, 0.70, 0.70, 5, 220, true);
    const lavarropas = new Lavarropas(
        "Lavarropas", 0.85, 0.60, 0.60, 6, 220, 8, 1200
    );
    const bicicletaNoPlegable = new Bicicleta(
        "Bicicleta no plegable", 1.00, 1.70, 0.50, 7, 29, false, 21, false
    );

    const auto = new Auto();

    auto.cargar(televisor);
    auto.cargar(bicicleta);
    auto.cargar(caja);
    auto.cargar(heladera); // No permitido.
    auto.cargar(bicicletaNoPlegable); // No es plegable.
    auto.cargar(caja);
    auto.cargar(caja);
    auto.cargar(caja); // Sexto elemento: supera la capacidad.

    console.log("=== CARGA DEL AUTO ===");
    for (const item of auto.listarItems()) {
        console.log(`${item.getNumeroIdentificador()} - ${item.getDescripcion()}`);
    }

    console.log();

    const camioneta = new Camioneta();

    camioneta.cargar(comoda);
    camioneta.cargar(heladera);
    camioneta.cargar(lavarropas);
    camioneta.cargar(televisor); // No permitido.
    camioneta.cargar(comoda);
    camioneta.cargar(comoda);
    camioneta.cargar(comoda);
    camioneta.cargar(comoda);
    camioneta.cargar(comoda);
    camioneta.cargar(comoda);
    camioneta.cargar(comoda);
    camioneta.cargar(heladera); // Undécimo elemento: supera la capacidad.

    console.log("=== CARGA DE LA CAMIONETA ===");
    for (const item of camioneta.listarItems()) {
        console.log(`${item.getNumeroIdentificador()} - ${item.getDescripcion()}`);
    }
}

main();
