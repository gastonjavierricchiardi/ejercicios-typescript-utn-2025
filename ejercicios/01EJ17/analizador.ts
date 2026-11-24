import { Objeto } from "./objeto";
import { Material } from "./types/materiales";
import { TipoObjeto } from "./types/tipoObjeto";

export class Analizador {
    public analizar(objeto: Objeto): void {
        this.analizarObjeto(objeto, false);
    }

    private analizarObjeto(objeto: Objeto, estaContenido: boolean): void {
        const tieneContenido = objeto.tieneContenido();
        let tipoObjeto: TipoObjeto;

        if (!estaContenido && !tieneContenido) {
            tipoObjeto = TipoObjeto.Simple;
        } else if (!estaContenido && tieneContenido) {
            tipoObjeto = TipoObjeto.Contenedor;
        } else if (estaContenido && !tieneContenido) {
            tipoObjeto = TipoObjeto.Contenido;
        } else {
            tipoObjeto = TipoObjeto.Sambuchito;
        }

        console.log(`Material   : ${Material[objeto.getMaterial()]}`);
        console.log(`Volumen    : ${objeto.getVolumen()} cm3`);
        console.log(`Tipo Objeto: ${TipoObjeto[tipoObjeto]}`);
        console.log();

        for (const objetoContenido of objeto.obtenerContenido()) {
            this.analizarObjeto(objetoContenido, true);
        }
    }
}
