import Ambiente from "./ambiente";
import Contacto from "./contacto";

export default abstract class  Inmueble
{
    private _provincia: string;
    public get provincia(): string {
        return this._provincia;
    }
    public set provincia(value: string) {
        this._provincia = value;
    }
    private _barrio: string;
    public get barrio(): string {
        return this._barrio;
    }
    public set barrio(value: string) {
        this._barrio = value;
    }
    private _nombreCalle: string;
    public get nombreCalle(): string {
        return this._nombreCalle;
    }
    public set nombreCalle(value: string) {
        this._nombreCalle = value;
    }
    private _altura: string;
    public get altura(): string {
        return this._altura;
    }
    public set altura(value: string) {
        this._altura = value;
    }
    private _observacion: string;
    public get observacion(): string {
        return this._observacion;
    }
    public set observacion(value: string) {
        this._observacion = value;
    }
    private _esBarrioPrivado: boolean;
    public get esBarrioPrivado(): boolean {
        return this._esBarrioPrivado;
    }
    public set esBarrioPrivado(value: boolean) {
        this._esBarrioPrivado = value;
    }
    private _tieneCloaca: boolean;
    public get tieneCloaca(): boolean {
        return this._tieneCloaca;
    }
    public set tieneCloaca(value: boolean) {
        this._tieneCloaca = value;
    }
    private _tieneSuministroAGas: boolean;
    public get tieneSuministroAGas(): boolean {
        return this._tieneSuministroAGas;
    }
    public set tieneSuministroAGas(value: boolean) {
        this._tieneSuministroAGas = value;
    }
    private _estaEnVenta: boolean;
    public get estaEnVenta(): boolean {
        return this._estaEnVenta;
    }
    public set estaEnVenta(value: boolean) {
        this._estaEnVenta = value;
    }
    private _contacto: Contacto;
    public get contacto(): Contacto {
        return this._contacto;
    }
    public set contacto(value: Contacto) {
        this._contacto = value;
    }
    private _ambientes : Array<Ambiente> = new Array<Ambiente>();

    public constructor (pProvincia : string, pBarrio : string, pNombreCalle:string,
         pAltura : string, pEsBarrioPrivado : boolean, pTieneCloaca : boolean, 
         pTieneGas : boolean, pContacto : Contacto, pAmbientes : Array<Ambiente>,
        pObservacion : string = "",  pEstaEnVenta : boolean = false )
    {
        this._altura=pAltura;
        this._ambientes = pAmbientes;
        this._tieneCloaca = pTieneCloaca;
        this._barrio = pBarrio;
        this._nombreCalle = pNombreCalle;
        this._esBarrioPrivado = pEsBarrioPrivado;
        this._tieneSuministroAGas = pTieneGas;
        this._provincia = pProvincia;
        this._contacto = pContacto;
        this._observacion = pObservacion;
        this._estaEnVenta = pEstaEnVenta;

    }

    public cantidadAmbientes() : number
    {
        return  this._ambientes.length;
    }

    public superficieCubierta () : number
    {
        let superficie = 0;
        for (let unAmbiente of  this._ambientes  )
        {
            if (unAmbiente.esCubierto)
                superficie =+ unAmbiente.dimension();
        }

        return superficie;
    }

    public superficieDescubierta () : number
    {
        let superficie = 0;
        for (let unAmbiente of  this._ambientes  )
        {
            if (!unAmbiente.esCubierto)
                superficie =+ unAmbiente.dimension();
        }

        return superficie;
    }
    
    public superficieTotal () : number
    {
        console.log("Superficie techada: " +  this.superficieDescubierta());
        console.log("Superficie cubierta: " +  this.superficieCubierta());
        return this.superficieCubierta() + this.superficieDescubierta();
    }


    public abstract mostrarInformacion() : string;
}