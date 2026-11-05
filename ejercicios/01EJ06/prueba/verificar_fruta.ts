import assert from "node:assert/strict";
import Fruta from "../fruta";
import FrutaExperimental from "./fruta";

// Valores esperados según la consigna y la normalización ya usada en los setters.
const casos = [
    [0, true, 0, true],
    [150, true, 150, true],
    [199, true, 199, true],
    [200, true, 200, false],
    [201, true, 201, false],
    [150, false, 150, false],
    [-10, true, 0, true],
] as const;

for (const [peso, estacional, pesoEsperado, comestible] of casos) {
    const principal = new Fruta("  Roja  ", peso, estacional);
    const experimental = new FrutaExperimental("  Roja  ", peso, estacional);
    assert.deepEqual(
        [principal.color, principal.peso, principal.esEstacional, principal.esComestible()],
        ["Roja", pesoEsperado, estacional, comestible]
    );
    assert.deepEqual(
        [experimental.getColor(), experimental.getPeso(), experimental.getEsEstacional(), experimental.esComestible()],
        ["Roja", pesoEsperado, estacional, comestible]
    );

    const sinDatos = new Fruta();
    const sinDatosExperimental = new FrutaExperimental();
    assert.deepEqual(
        [sinDatos.color, sinDatos.peso, sinDatos.esEstacional, sinDatos.esComestible()],
        ["", 0, false, false]
    );
    assert.deepEqual(
        [sinDatosExperimental.getColor(), sinDatosExperimental.getPeso(), sinDatosExperimental.getEsEstacional(), sinDatosExperimental.esComestible()],
        ["", 0, false, false]
    );

    sinDatos.color = "  Roja  ";
    sinDatos.peso = peso;
    sinDatos.esEstacional = estacional;
    sinDatosExperimental.setColor("  Roja  ");
    sinDatosExperimental.setPeso(peso);
    sinDatosExperimental.setEsEstacional(estacional);
    assert.deepEqual(
        [sinDatos.color, sinDatos.peso, sinDatos.esEstacional, sinDatos.esComestible()],
        ["Roja", pesoEsperado, estacional, comestible]
    );
    assert.deepEqual(
        [sinDatosExperimental.getColor(), sinDatosExperimental.getPeso(), sinDatosExperimental.getEsEstacional(), sinDatosExperimental.esComestible()],
        ["Roja", pesoEsperado, estacional, comestible]
    );
    // Las instancias con parámetros conservan su estado al modificar las otras.
    sinDatos.peso = 500;
    sinDatosExperimental.setPeso(500);
    assert.equal(principal.peso, pesoEsperado);
    assert.equal(experimental.getPeso(), pesoEsperado);
}

console.log("Fruta: 7 casos verificados en ambas variantes, por constructor y setters.");
