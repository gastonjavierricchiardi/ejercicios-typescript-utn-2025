/**
6.​ Crear una clase Fruta con variables privadas color, peso, esEstacional.
- Crear setters y getters.
- Escribir una función llamada esComestible() que devuelva verdadero cuando la fruta pesa menos de 200 gr y es de estación, y falso en cualquier otro caso.
- Definir dos constructores de modo tal que la fruta pueda crearse con los valores color, peso y estacional al momento de instanciarse, o bien crearse sin valores iniciales.
*/

import Fruta from "./fruta";

function main() {
    // vamos armando el lote de pruebas de lo solicitado
    // A) crear con valores (constructor con parametros)
    const frutaA = new Fruta("Roja", 150, true);
    console.log("Fruta A --->", frutaA.getColor(), frutaA.getPeso(), "gramos.", "Estacional:", frutaA.getEsEstacional())
    // esperamos: true (150 < 200 y es de estación)
    console.log("Fruta A ---> es comestible?", frutaA.esComestible());

    // B) Creamos la instancia sin valores y asignamos a posterior (constructor vacio)
    const frutaB = new Fruta();
    frutaB.setColor("Verde");
    frutaB.setPeso(220);
    frutaB.setEsEstacional(true);
    console.log("Fruta B --->", frutaB.getColor(), frutaB.getPeso(), "gramos", "Estacional:", frutaB.getEsEstacional());
    // Esperado false (220 no es < 200)
    console.log("Fruta B es comestible?", frutaB.esComestible());

    // C) crear con valores (constructor con parametros)
    const frutaC = new Fruta("Verde", 201, true);
    console.log("Fruta C --->", frutaC.getColor(), frutaC.getPeso(), "gramos.", "Estacional:", frutaC.getEsEstacional())
    console.log("Fruta C ---> es comestible?", frutaC.esComestible());

    // D) peso < 200 pero NO es estacional
    const frutaD = new Fruta("Amarilla", 150, false);
    console.log("Fruta D --->", frutaD.getColor(), frutaD.getPeso(), "gramos.", "Estacional:", frutaD.getEsEstacional());
    // Esperado false (pesa < 200 pero NO es de estación)
    console.log("Fruta D ---> es comestible?", frutaD.esComestible());



}
main();
