/** \01EJ10\index_01EJ10.ts
10. ​Continuando con el ejemplo anterior, realizar las siguientes modificaciones:

- Agregar en Persona el método presentarse() que devuelva nombre y apellido de la persona.
- Crear una instancia de cada una de las clases y asignarle valores.
- Mostrar por pantalla los valores.
- Sobreescribir el método presentarse() en la clase Guardia de modo tal que devuelva el siguiente mensaje “Hola, mi nombre es <nombre y apellido> y soy el guardia.” Donde <nombre y apellido> debe ser reemplazado por el nombre y apellido del guardia.
- ​Mostrar por pantalla el resultado de invocar el método presentarse() y advertir que la implementación en la clase Guardia tiene precedencia sobre la de su padre.
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

    console.log(persona1.presentarse());
    console.log(visitante1.presentarse());
    console.log(guardia1.presentarse());
}

main();
