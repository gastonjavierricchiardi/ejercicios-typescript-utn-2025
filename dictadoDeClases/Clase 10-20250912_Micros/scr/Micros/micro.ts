import Empleado from "./empleado";

export default   class   Micro
{
    private _capacidadDeSentados : number;
    private _capacidadDeParados : number;
    private _volumen : number;

    constructor (pCapacidadDeSentados : number, pCapacidadDeParados : number, pVolumen : number)
    {
        this._capacidadDeSentados = pCapacidadDeSentados;
        this._capacidadDeParados = pCapacidadDeParados;
        this._volumen = pVolumen;
    }
    
    public get capacidadDeSentados() : number {
        return this.capacidadDeSentados;
    }

    public espaciosLibres(): number
    {
        let espacioLibreSentado : number = this._capacidadDeSentados;
        espacioLibreSentado = espacioLibreSentado - this.sentados.length;

        let espacioLibreParado : number = this._capacidadDeParados;
        espacioLibreParado = espacioLibreParado - this.parados.length;

        return (espacioLibreParado + espacioLibreSentado);
    }
    
    public get volumen() : number {
        return this._volumen;
    }
    
    public get capacidadDeParados() : number {
        return this._capacidadDeParados;
    }

    private sentados : Array<Empleado> = new Array<Empleado>();
    private parados : Array<Empleado> = new Array<Empleado>();

    public capacidadTotal() : number
    {
        return this._capacidadDeParados + this.capacidadDeSentados;
    }

    public hayLugar () : boolean
    {
        if (this.sentados.length + this.parados.length < this.capacidadTotal () )
            return true;
        return false;
    }

    public hayLugarParado () : boolean
    {
        if (this.parados.length < this._capacidadDeParados)
            return true;
        else
            return false;
    }

    public hayLugarSentado () : boolean
    {
        //return (this.sentados.size < this._capacidadDeSentados);
        if (this.sentados.length < this._capacidadDeSentados)
            return true;
        else
            return false;
    }

    private estaVacio () : boolean
    {
        if (this.parados.length == 0 && this.sentados.length==0)
            return true;
        else
            return false;
    }

    private ultimoEmpleadoEnSubirseySentarse() : Empleado | undefined
    {
        if (!this.estaVacio())
        {
            return this.sentados.pop();
        }

        return  undefined;
    }

    private ultimoEmpleadoEnSubirseParado() : Empleado | undefined
    {
        if (!this.estaVacio())
        {
            return this.parados.pop();
        }

        return  undefined;
    }

    public bajarEmpleado() : boolean
    {

        if (this.estaVacio())
            throw new Error("El micro esta vacio, no se puede bajar alguien que no existe");
        
        if (this.parados.length > 0)
        {
            this.parados.pop();
            return true;
        }

        return false;
    }

    
}