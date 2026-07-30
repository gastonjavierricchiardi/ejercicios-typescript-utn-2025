/** \01EJ12\index_01EJ12.ts
12. ​Continuando con el ejemplo anterior, realizar las siguientes modificaciones:

- Modificar la clase Guardia para que el método público controlarDocumento() devuelva el mensaje “Adelante <nombre completo del visitante> con dni <dni>” reemplazando respectivamente con el nombre completo del visitante y su dni.
- Crear una instancia de cada una de las clases y asignarle valores.
- Mostrar por pantalla los valores.
- Analizar si es posible pasar un único parámetro al método controlarDocumento() y estudiar las ventas y desventajas que tendría asociado.
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
    console.log("Control ->", per1.controlarDocumentoPorDni(per2.getDni()));

    console.log("\n===== EJ 12: controlarDocumento(visitante) =====");
    console.log("Control ->", per1.controlarDocumento(per2));
}

main();