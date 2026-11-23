/**
7.​ Crear una clase Ninja con las variables privadas arteMarcial, arma, fuerza (entero) y salto (entero).
- Crear setters y getters manualmente.
- Crear una función saltar() que reciba un parámetro multiplicador (entero); imprimir por consola salto x parámetro.
- Crear la función ataque() que imprima por consola el arma que usa el ninja y el arte marcial.
- Crear dos instancias de Ninja, asignar distintos valores para cada uno de los atributos e invocar las funciones saltar() y ataque().
*/

import Ninja from "./Ninja";

function main(): void {
    const ninja1 = new Ninja();
    ninja1.setArteMarcial("Karate");
    ninja1.setArma("Katana");
    ninja1.setFuerza(80);
    ninja1.setSalto(3);

    ninja1.saltar(2);
    ninja1.ataque();

    console.log();

    const ninja2 = new Ninja();
    ninja2.setArteMarcial("Jiu-Jitsu");
    ninja2.setArma("Nunchaku");
    ninja2.setFuerza(65);
    ninja2.setSalto(5);

    ninja2.saltar(3);
    ninja2.ataque();
}
main();
