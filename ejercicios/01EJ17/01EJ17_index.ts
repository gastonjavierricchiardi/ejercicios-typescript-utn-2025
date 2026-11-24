import { Objeto } from "./objeto";
import { Analizador } from "./analizador";
import { Material } from "./types/materiales";

function main(): void {
    const analizador = new Analizador();

    const mamushkaInterior = new Objeto(Material.Madera, 250);
    const mamushkaIntermedia = new Objeto(Material.Madera, 500);
    const mamushkaExterior = new Objeto(Material.Madera, 1000);

    mamushkaIntermedia.agregarContenido(mamushkaInterior);
    mamushkaExterior.agregarContenido(mamushkaIntermedia);

    console.log("=== Mamushka ===");
    analizador.analizar(mamushkaExterior);

    const portafolios = new Objeto(Material.Cuero, 3000);

    console.log("=== Portafolios ===");
    analizador.analizar(portafolios);

    const gasa = new Objeto(Material.Textil, 100);
    const aguaOxigenada = new Objeto(Material.Liquido, 250);
    const botiquin = new Objeto(Material.Plastico, 2000);

    botiquin.agregarContenido(gasa);
    botiquin.agregarContenido(aguaOxigenada);

    console.log("=== Botiquín ===");
    analizador.analizar(botiquin);

    const peine = new Objeto(Material.Plastico, 150);
    const bolsa = new Objeto(Material.Cuero, 5000);

    bolsa.agregarContenido(peine);
    bolsa.agregarContenido(botiquin);

    console.log("=== Bolsa ===");
    analizador.analizar(bolsa);
}

main();
