/** \01EJ08\index_01EJ10.ts
10. ​Continuando con el ejemplo anterior, realizar las siguientes modificaciones:

- Agregar en Persona el método presentarse() que devuelva nombre y apellido de la persona.
- Crear una instancia de cada una de las clases y asignarle valores.
- Mostrar por pantalla los valores.
- Sobreescribir el método presentarse() en la clase Guardia de modo tal que devuelva el siguiente mensaje “Hola, mi nombre es <nombre y apellido> y soy el guardia.” Donde <nombre y apellido> debe ser reemplazado por el nombre y apellido del guardia.
- ​Mostrar por pantalla el resultado de invocar el método presentarse() y advertir que la implementación en la clase Guardia tiene precedencia sobre la de su padre.
*/

import Persona from "./persona";
import Visitante from "./visitante"
import Guardia from "./guardia"

function main(): void {
    console.log(`===== vamos a presentar cada una con una función desde PERSONA =====`);
    // PERSONA
    const per0 = new Persona("Tiago", "Gael");
    console.log(`En Persona = Nombre:`, per0.getNombre(), `- Apellido:`, per0.getApellido());

    // GUARDIA
    const per1 = new Guardia("Desirée", "Lis");
    console.log(`En Guardia = Nombre:`, per1.getNombre(), `- Apellido:`, per1.getApellido());

    // VISITANTE
    const per2 = new Visitante("Gastón", "Javier")
    console.log(`En Visitante = Nombre:`, per2.getNombre(), `- Apellido:`, per2.getApellido());

    console.log(`===== vamos a presentar SOBREESCRIBIENDO EN GUARDIA =====`);
    console.log(per0.presentarse());
    console.log(per1.presentarse());
    console.log(per2.presentarse());
}

main();