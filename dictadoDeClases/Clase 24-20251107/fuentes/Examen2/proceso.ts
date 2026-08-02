
import Documento from "./documento";
export default abstract  class  Proceso
{
    abstract procesar(pDocumento : Documento) : void;
}