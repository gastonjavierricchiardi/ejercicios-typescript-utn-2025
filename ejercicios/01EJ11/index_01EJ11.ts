/** \01EJ11\index_01EJ11.ts
11. ​Continuando con el ejemplo anterior, realizar las siguientes modificaciones:

- Agregar en Visitante el atributo privado dni (numérico) con sus setters y getters correspondientes.
- Agregar en Guardia el método público controlarDocumento() que reciba como parámetro el dni de la persona
 y devuelva el mensaje “Adelante persona con dni <dni>” donde <dni> es el valor recibido por parámetro.
- Crear una instancia de cada una de las clases y asignarle valores.
- Mostrar por pantalla los valores.
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
    visitante1.setDni(12345678);

    const guardia1 = new Guardia();
    guardia1.setNombre("Carlos");
    guardia1.setApellido("Gómez");

    console.log(persona1.presentarse());
    console.log(visitante1.presentarse());
    console.log(guardia1.presentarse());
    console.log(`DNI: ${visitante1.getDni()}`);
    console.log(guardia1.controlarDocumento(visitante1.getDni()));
}

main();
