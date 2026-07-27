/**
 * // index_01EJ04.ts 
4. ​Crear una clase Cine que tenga los atributos privados película y horario:

- Crear métodos públicos para la asignación y recuperación de valores.
- Crear un método público obtenerCartelera() que devuelva el nombre de la película y el horario.
- Crear una instancia y asignarle valores.
- Mostrar por pantalla los valores.
*/
import Cine from "./cine";

function main(): void {
    // sala 1
    const sala1 = new Cine();
    sala1.setPelicula("Inception");
    sala1.setHorario("20:00");
    // mostramos el contenido de la sala 1
    console.log(sala1.obtenerCartelera());

    // Sala 2
    const sala2 = new Cine();
    sala2.setPelicula("The Matrix");
    sala2.setHorario("21:00");
    console.log(sala2.obtenerCartelera());
}

main();