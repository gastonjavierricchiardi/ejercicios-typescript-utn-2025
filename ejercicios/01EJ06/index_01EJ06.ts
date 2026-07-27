// \SCR\01EJXX\01EJ06\index_01EJ06.ts

import Fruta from "./fruta";

function main() {
    // vamos armando el lote de pruebas de lo solicitado
    // A) crear con valores (constructor con parametros)
    const frutaA = new Fruta("Roja", 150, true);
    console.log("Fruta A --->", frutaA.color, frutaA.peso, "gramos.", "Estacional:", frutaA.esEstacional)
    // esperamos: true (150 < 200 y es de estación)
    console.log("Fruta A ---> es comestible?", frutaA.esComestible());

    // B) Creamos la instancia sin valores y asignamos a posterior (constructor vacio)
    const frutaB = new Fruta();
    frutaB.color = "Verde";
    frutaB.peso = 220
    frutaB.esEstacional = true;
    console.log("Fruta B --->", frutaB.color, frutaB.peso, "gramos", "Estacional:", frutaB.esEstacional);
    // Esperado false (220 no es < 200)
    console.log("Fruta B es comestible?", frutaB.esComestible());

    // C) crear con valores (constructor con parametros)
    const frutaC = new Fruta("Verde", 201, true);
    console.log("Fruta C --->", frutaC.color, frutaC.peso, "gramos.", "Estacional:", frutaC.esEstacional)
    console.log("Fruta C ---> es comestible?", frutaC.esComestible());

    // D) peso < 200 pero NO es estacional
    const frutaD = new Fruta("Amarilla", 150, false);
    console.log("Fruta D --->", frutaD.color, frutaD.peso, "gramos.", "Estacional:", frutaD.esEstacional);
    // Esperado false (pesa < 200 pero NO es de estación)
    console.log("Fruta D ---> es comestible?", frutaD.esComestible());

}

main();