/** \01EJ09\index_01EJ09.ts
9. ​Crear una clase Persona que tenga los atributos privados nombre y apellido, con sus setters y getters.

- Crear una clase llamada Visitante que extienda de Persona.
- Crear una clase Guardia que extienda de Persona.
- Crear una instancia de cada una de las clases y asignarle valores.
- Mostrar por pantalla los valores; estudiar las ventajas del uso de la herencia.
*/

import Persona from "./persona";
import Visitante from "./visitante";
import Guardia from "./guardia";

function main(): void {
    const persona1 = new Persona();
    persona1.setNombre("Gastón");
    persona1.setApellido("Ricchiardi");

    const visitante1 = new Visitante();
    visitante1.setNombre("Desirée");
    visitante1.setApellido("Candelaria");

    const guardia1 = new Guardia();
    guardia1.setNombre("Carlos");
    guardia1.setApellido("Gómez");

    console.log(`Persona: ${persona1.getNombre()} ${persona1.getApellido()}`);
    console.log(`Visitante: ${visitante1.getNombre()} ${visitante1.getApellido()}`);
    console.log(`Guardia: ${guardia1.getNombre()} ${guardia1.getApellido()}`);
}

main();
