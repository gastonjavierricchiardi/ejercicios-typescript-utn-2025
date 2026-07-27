// \01EJ05\index
/**
5. ​Crear una clase Cine que tenga los atributos privados película y horario.
- Crear métodos públicos para la asignación y recuperación de valores.
- Crear una instancia y asignarle valores.
- Mostrar por pantalla los valores.
- Crear una segunda instancia y asignarle valores.
- Mostrar por pantalla los valores.
- Cambiar los valores de la primera instancia.
- Mostrar en pantalla los valores de ambas instancias; concluir que la instrucción new crea objetos distintos.
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

    // modificamos los valores de la sala1 , tal cómo pide el enunciado
    console.log("Aplicamos cambios de las instancias e imprimimos en pantalla nuevamente");
    sala1.setPelicula("The Matrix 2");
    sala1.setHorario("19:00");
    console.log(sala1.obtenerCartelera());
    console.log(sala2.obtenerCartelera());
}
main();