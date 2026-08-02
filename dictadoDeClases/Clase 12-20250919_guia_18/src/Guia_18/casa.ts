import Ambiente from "./ambiente";
import Contacto from "./contacto";
import Inmueble from "./inmueble";

export default  class Casa extends Inmueble
{
    public mostrarInformacion(): string {
        let mensaje : string = "";
        mensaje = "Casa - Contacto " + this.contacto.info() + " / Superficie: " + this.superficieTotal() + " Ambientes: " + this.cantidadAmbientes() + " (Barrio Privado: " + this.esBarrioPrivado + ")";

        return mensaje;
    }
    private _tieneQuincho: boolean;
    public get tieneQuincho(): boolean {
        return this._tieneQuincho;
    }
    public set tieneQuincho(value: boolean) {
        this._tieneQuincho = value;
    }
    private _tienePileta: boolean;
    public get tienePileta(): boolean {
        return this._tienePileta;
    }
    public set tienePileta(value: boolean) {
        this._tienePileta = value;
    }

    constructor(pProvincia : string, pBarrio : string, pNombreCalle:string,
             pAltura : string, pEsBarrioPrivado : boolean, pTieneCloaca : boolean, 
             pTieneGas : boolean, pContacto : Contacto, pAmbientes : Array<Ambiente>,
            pObservacion : string = "",  pEstaEnVenta : boolean = false,
        pTienePileta : boolean = false, pTieneQuincho : boolean = false)
    {
        
        super(pProvincia,   pBarrio, pNombreCalle, pAltura, pEsBarrioPrivado, pTieneCloaca, pTieneGas, pContacto, pAmbientes, pObservacion, pEstaEnVenta);
        this._tienePileta = pTienePileta;
        this._tieneQuincho = pTieneQuincho;
    }

}