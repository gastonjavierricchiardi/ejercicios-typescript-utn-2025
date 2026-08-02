import Proceso from "./proceso";
import Documento from "./documento";

export default class Encriptacion extends Proceso
{
    procesar(pDocumento: Documento): void {
        let textoEncriptado: string;
        textoEncriptado = "TEXTO ENCRIPTADO DE: " + pDocumento.contenido;
        pDocumento.contenido=textoEncriptado;

    }
    
}