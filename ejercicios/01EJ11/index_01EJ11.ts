/** \01EJ08\index_01EJ11.ts
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
    console.log("===== EJ 08-09: Instancias y datos (getters) =====");

    // PERSONA
    const per0 = new Persona("Tiago", "Gael");
    console.log("Persona ->", "Nombre:", per0.getNombre(), "| Apellido:", per0.getApellido());

    // GUARDIA
    const per1 = new Guardia("Desirée", "Lis");
    console.log("Guardia ->", "Nombre:", per1.getNombre(), "| Apellido:", per1.getApellido());

    // VISITANTE (EJ 11: incluye DNI)
    const per2 = new Visitante("Gastón", "Javier", 11222333444);
    console.log(
        "Visitante ->",
        "Nombre:", per2.getNombre(),
        "| Apellido:", per2.getApellido(),
        "| DNI:", per2.getDni()
    );
    console.log("\n===== EJ 10: presentarse() (Guardia override) =====");
    console.log("Persona.presentarse()   ->", per0.presentarse());
    console.log("Guardia.presentarse()   ->", per1.presentarse());
    console.log("Visitante.presentarse() ->", per2.presentarse());

    console.log("\n===== EJ 11: controlarDocumento(dni) =====");
    console.log("Control ->", per1.controlarDocumento(per2.getDni()));
}

main();