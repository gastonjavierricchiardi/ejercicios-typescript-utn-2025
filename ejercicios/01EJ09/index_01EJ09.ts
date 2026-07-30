/** \01ejxx\01EJ08\index_01EJ09.ts
9. ​Crear una clase Persona que tenga los atributos privados nombre y apellido, con sus setters y getters.

- Crear una clase llamada Visitante que extienda de Persona.
- Crear una clase Guardia que extienda de Persona.
- Crear una instancia de cada una de las clases y asignarle valores.
- Mostrar por pantalla los valores; estudiar las ventajas del uso de la herencia.
*/

import Persona from "./persona";
import Visitante from "./visitante"
import Guardia from "./guardia"

function main(): void {
    const per0 = new Persona("Tiago", "Gael");
    console.log(`En Persona = Nombre:`, per0.getNombre(), `- Apellido:`, per0.getApellido());
    const per1 = new Guardia("Desirée", "Lis");
    console.log(`En Guardia = Nombre:`, per1.getNombre(), `- Apellido:`, per1.getApellido());
    const per2 = new Visitante("Gastón", "Javier")
    console.log(`En Visitas = Nombre:`, per2.getNombre(), `- Apellido: `, per2.getApellido());
}
main();