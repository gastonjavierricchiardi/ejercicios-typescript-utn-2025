/**
7.​ Crear una clase Ninja con las variables privadas arteMarcial, arma, fuerza (entero) y salto (entero).
- Crear setters y getters manualmente.
- Crear una función saltar() que reciba un parámetro multiplicador (entero); imprimir por consola salto x parámetro.
- Crear la función ataque() que imprima por consola el arma que usa el ninja y el arte marcial.
- Crear dos instancias de Ninja, asignar distintos valores para cada uno de los atributos e invocar las funciones saltar() y ataque().
*/

import Ninja from "./Ninja";
import { imprimirSalto, imprimirAtaque } from "./utils/acciones";

function main(): void {
    const ninja1 = new Ninja("Karate", "Nunchaku", 9, 5);
    const ninja2 = new Ninja("Ninjutsu", "Katana", 7, 3);
    const ninja3 = new Ninja("TAEKONDO", "DAGA", -5, 0)

    imprimirSalto(ninja1, 2);
    imprimirAtaque(ninja1);

    imprimirSalto(ninja2, 3);
    imprimirAtaque(ninja2);

    imprimirSalto(ninja3, 2);
    imprimirAtaque(ninja3);
    console.log("Ninja3 fuerza:", ninja3.getFuerza(), "salto:", ninja3.getSalto());
}
main();