/** \01EJXX\01EJ08\index_01EJ08.ts
8. ​Crear una clase `Persona` que tenga los atributos privados:
- nombre
- apellido
    > con sus setters y getters.

* Crear una clase llamada `Visitante` con los mismos atributos.:
* - nombre
* - apellido
    > con sus setters y getters.

* Crear una clase `Guardia` con los mismos atributos.
* - nombre
* - apellido
    > con sus setters y getters.
* Crear una instancia de cada una de las clases y asignarle valores.
* Mostrar por pantalla los valores.
*/

import Persona from "./persona";
import Visitante from "./visitante";
import Guardia from "./guardia";

function main(): void {
    console.log("===== EJ 08: Instancias y datos (getters) =====");

    // PERSONA
    const per0 = new Persona("Tiago", "Gael");
    console.log("Persona ->", "Nombre:", per0.getNombre(), "| Apellido:", per0.getApellido());

    // GUARDIA
    const per1 = new Guardia("Desirée", "Lis");
    console.log("Guardia ->", "Nombre:", per1.getNombre(), "| Apellido:", per1.getApellido());

    // VISITANTE
    const per2 = new Visitante("Gastón", "javier");
    console.log(
        "Visitante ->",
        "Nombre:", per2.getNombre(),
        "| Apellido:", per2.getApellido(),
    );
}

main();
