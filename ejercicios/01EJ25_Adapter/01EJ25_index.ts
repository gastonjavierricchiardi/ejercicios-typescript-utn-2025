import { IMolinete } from "./iMolinete";
import { GiraMax } from "./giraMax";
import { Molinit } from "./molinit";
import { GiraMaxAdapter } from "./giraMaxAdapter";
import { MolinitAdapter } from "./molinitAdapter";
import { Rotativity } from "./rotativity";
import { RotativityAdapter } from "./rotativityAdapter";

function main(): void {
    const molinetes: IMolinete[] = [
        new GiraMaxAdapter(new GiraMax(125, 90)),
        new MolinitAdapter(new Molinit(80, 65)),
        new RotativityAdapter(new Rotativity())
    ];

    for (let indice = 0; indice < molinetes.length; indice++) {
        const molinete: IMolinete = molinetes[indice];
        console.log(`Molinete ${indice + 1}`);
        console.log(`Ingresos: ${molinete.obtenerIngresos()}`);
        console.log(`Egresos: ${molinete.obtenerEgresos()}`);
        console.log();
    }
}

main();
