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
    console.log(guardia1.controlarDocumento(visitante1));
}

main();
