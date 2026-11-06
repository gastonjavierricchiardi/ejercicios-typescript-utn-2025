import assert from "node:assert/strict";
import Ninja from "./Ninja";
import { imprimirSalto, imprimirAtaque } from "./utils/acciones";

const casos = [
    [1, 1], [9, 9], [0, 1], [-1, 1],
    [2.5, 1], [NaN, 1], [Infinity, 1], [-Infinity, 1]
] as const;

for (const [entrada, esperado] of casos) {
    const ninja = new Ninja("Karate", "Katana", entrada, entrada);
    assert.equal(ninja.getFuerza(), esperado);
    assert.equal(ninja.getSalto(), esperado);

    const porSetters = new Ninja("Ninjutsu", "Daga", 5, 3);
    porSetters.setFuerza(entrada);
    porSetters.setSalto(entrada);
    assert.equal(porSetters.getFuerza(), esperado);
    assert.equal(porSetters.getSalto(), esperado);
    // Modificar otra instancia no debe alterar sus atributos ni los textos.
    assert.equal(ninja.getArteMarcial(), "Karate");
    assert.equal(ninja.getArma(), "Katana");
    assert.equal(ninja.getFuerza(), esperado);
    assert.equal(ninja.getSalto(), esperado);
}

const ninja = new Ninja("Karate", "Nunchaku", 9, 5);
const mensajes: unknown[][] = [];
const logOriginal = console.log;
console.log = (...args: unknown[]): void => { mensajes.push(args); };
try {
    for (const [multiplicador, esperado] of [[-2, -10], [-1, -5], [0, 0], [1, 5], [2, 10]]) {
        assert.equal(ninja.saltar(multiplicador), esperado);
    }
    assert.equal(ninja.ataque(), "Arma: Nunchaku | Arte marcial: Karate");
    assert.equal(mensajes.length, 0, "Ninja debe devolver resultados sin imprimir");

    for (const invalido of [1.5, -1.5, NaN, Infinity, -Infinity]) {
        assert.throws(() => ninja.saltar(invalido), RangeError);
        assert.throws(() => imprimirSalto(ninja, invalido), RangeError);
    }
    assert.equal(mensajes.length, 0, "Un salto inválido no debe imprimirse");

    assert.equal(imprimirSalto(ninja, 2), undefined);
    assert.equal(imprimirAtaque(ninja), undefined);
    assert.deepEqual(mensajes, [[10], ["Arma: Nunchaku | Arte marcial: Karate"]]);

    ninja.setArteMarcial("Ninjutsu");
    ninja.setArma("Daga");
    ninja.setFuerza(7);
    ninja.setSalto(3);
    assert.equal(ninja.getArteMarcial(), "Ninjutsu");
    assert.equal(ninja.getArma(), "Daga");
    assert.equal(ninja.getFuerza(), 7);
    assert.equal(ninja.getSalto(), 3);
    assert.equal(ninja.saltar(3), 9);
    assert.equal(ninja.ataque(), "Arma: Daga | Arte marcial: Ninjutsu");
    assert.equal(mensajes.length, 2);
} finally {
    console.log = logOriginal;
}

console.log("Ninja: getters, setters, enteros, resultados y separación de impresión verificados.");
