import { Escrito } from "./escrito";
import { Documento } from "./documento";
import { Ley } from "./ley";
import { Document } from "./document";
import { NormalizadorDocumento } from "./normalizadorDocumento";
import { AnalizadorDocumentos } from "./analizadorDocumentos";

function main(): void {
    const hoy = new Date();
    const ayer = new Date(hoy.getTime());
    ayer.setDate(ayer.getDate() - 1);
    const manana = new Date(hoy.getTime());
    manana.setDate(manana.getDate() + 1);

    const normalizador = new NormalizadorDocumento();
    const analizador = new AnalizadorDocumentos();

    const escrito = new Escrito(0, ayer, "E".repeat(100), "Autor de prueba");
    const documento = new Documento(-1, hoy, "D".repeat(101), "Responsable de prueba");
    const ley = new Ley(2, hoy, "L".repeat(100), "Firmante de prueba");

    const normalizados: Document[] = [
        normalizador.normalizar(escrito),
        normalizador.normalizar(documento),
        normalizador.normalizar(ley)
    ];

    console.log("=== Documentos normalizados ===");
    for (const normalizado of normalizados) {
        console.log(`ID: ${normalizado.getId()}`);
        console.log(`Fecha de emisión: ${normalizado.getIssueDate().toISOString()}`);
        console.log(`Cuerpo: ${normalizado.getBody()}`);
        console.log(`Responsable: ${normalizado.getResponsible()}`);
        console.log();
    }

    const documentos: Document[] = [
        ...normalizados,
        new Document(3, hoy, "C".repeat(99), "Responsable de prueba"),
        new Document(4, manana, "C".repeat(100), "Responsable de prueba"),
        new Document(5, hoy, "C".repeat(100), ""),
        new Document(6, hoy, "", "Responsable de prueba"),
        new Document(7, new Date(NaN), "C".repeat(100), "Responsable de prueba"),
        new Document(NaN, hoy, "C".repeat(100), "Responsable de prueba")
    ];

    console.log("=== Casos, en orden ===");
    console.log("1. Escrito completo, cuerpo de 100 caracteres, fecha anterior e ID 0");
    console.log("2. Documento completo, cuerpo de 101 caracteres, fecha actual e ID negativo");
    console.log("3. Ley completa, cuerpo de 100 caracteres y fecha actual");
    console.log("4. Cuerpo de 99 caracteres");
    console.log("5. Fecha futura");
    console.log("6. Responsable vacío");
    console.log("7. Cuerpo vacío");
    console.log("8. Fecha inválida");
    console.log("9. Identificador no numérico");

    console.log("\n=== Resultados, en el mismo orden ===");
    analizador.analizador(documentos);
}

main();
