/** \01EJ13\index.ts
13. ​El laboratorio Kokumo Technologies está desarrollando el prototipo de un robot explorador cuyo sistema de tracción puede ser personalizado para que se adapte mejor al terreno.

## El robot, llamado KT-2020, tiene las siguientes características:

- Número de serie: KT-2020-P
- Potencia de tracción base (PTB): 10 hp
- Tracción: cualquiera de las dos opciones desarrolladas.

**Los sistemas de tracción disponibles son:**

- **Rueda de caucho:** ideal para entornos urbanos, su uso le resta 1 hp al PTB y permite el rodado de hasta 100 km; cuando se gasta, debe reemplazarse.

- **Oruga:** para todo tipo de terreno, le permite avanzar hasta 400 km antes de requerir reemplazo y resta 3 hp al PTB. Incorpora sensores Meke-M0 que le permiten conocer la temperatura.

### Analizar, diseñar, diagramar las relaciones e implementar el código.

Crear instancias de cada una de las clases y asignarle al robot los distintos sistemas de tracción, procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones:

1. Número de serie
2. potencia de tracción final
3. tipo de tracción,
4. cuanto puede avanzar
5. y datos sobre cualquier característica adicional que posea.
*/
import { Robot } from "./robot";
import { Rcaucho } from "./ruedas/rcaucho";
import { Roruga } from "./ruedas/roruga";
import { MekeM0 } from "./sensores/meke-m0";

function main(): void {
    console.log("===== PRUEBA EJ13 =====");

    const robot1 = new Robot("KT-2020-P", 10, new Rcaucho());

    // Con Rueda de caucho
    robot1.setTraccionActual(new Rcaucho());
    console.log("\n--- Con Rueda de caucho ---");
    console.log(robot1.reporte());

    // Con Oruga
    const sensor1 = new MekeM0(32);
    robot1.setTraccionActual(new Roruga(sensor1));
    console.log("\n--- Con Oruga ---");
    console.log(robot1.reporte());

    // Aumento de la temperatura (como si lo estuviera midiendo)
    sensor1.setTempActual(50);
    console.log("--- Nueva toma ---");
    console.log(robot1.reporte());
}

main();
