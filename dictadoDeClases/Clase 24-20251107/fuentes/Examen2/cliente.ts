import Proceso from "./proceso";
import Documento from "./documento";

export default class Cliente
{
    private _documento : Documento;
    private _formaProceso : Proceso;

    constructor(pDocumento : Documento, pFormaProceso : Proceso)
    {
        this._documento = pDocumento;
        this._formaProceso = pFormaProceso;
    }

    public procesarArchivo() : void
    {
        this._formaProceso.procesar(this._documento);
    }

    public cambiarForma(pFormaProceso : Proceso)
    {
        this._formaProceso = pFormaProceso;
    }

    public mostrarInformacionDelDocumento() : string
    {
        return this._documento.mostrarInfo();
    }
}