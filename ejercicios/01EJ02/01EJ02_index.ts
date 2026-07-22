/**
 * 2.​Crear una clase Vehiculo que tenga los atributos:
 * públicos:
 * -> marca
 * -> modelo
 * Privado: 
 * -> patente.
 * Crear una instancia y asignarle valores;
 * -> notar que el atributo privado no está disponible para la asignación de valores.
 * -> Mostrar por pantalla los valores asignados.
*/

import Vehiculo from "./vehiculo";

function main(): void {
    // creamos la instancia y asignamos valores.
    const v1 = new Vehiculo("Chevrolet", "spin", "XX999YY")

    console.log(`Marca: ${v1.marca}`);
    console.log(`Modelo: ${v1.modelo}`);
    console.log(`Patente: ${v1.get_Patente()}`); // cómo es privado, se tiene que mostrar mediante el GET.

    // creamos un sergundo vehiculo.
    const v2 = new Vehiculo("Ford", "K", "WWW888")
    console.log(`Marca: ${v2.marca}`);
    console.log(`Modelo: ${v2.modelo}`);
    console.log(`Patente: ${v2.get_Patente()}`);

}

main();