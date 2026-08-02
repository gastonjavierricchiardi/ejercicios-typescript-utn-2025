import Proceso from "./proceso";
import Documento from "./documento";

export default class Compresion extends Proceso
{
    procesar(pDocumento: Documento): void {
        let textoComprimido: string;
        textoComprimido = "TEXTO COMPRIMIDO DE: " + pDocumento.contenido;
        pDocumento.contenido=textoComprimido;
        let nuevoNombre : string;
        nuevoNombre = pDocumento.nombre + ".zip";
        pDocumento.nombre = nuevoNombre;
    }
    
}