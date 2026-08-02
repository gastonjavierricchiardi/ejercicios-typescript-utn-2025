export default abstract class  EmpleadoAbstracto 
{

    public presentarse() : string
    {
        return this.apellido + ", " + this.legajo + " con legajo " + this.legajo;
    }
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _apellido: string;
    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }
    private _legajo: number;
    public get legajo(): number {
        return this._legajo;
    }
    public set legajo(value: number) {
        this._legajo = value;
    }

    private _superior : EmpleadoAbstracto  | undefined;
    public get superior(): EmpleadoAbstracto | undefined {
        return this._superior;
    }
    public set superior(value: EmpleadoAbstracto) {
        this._superior = value;
    }
    
    public abstract Tope():number;

    public constructor(pNombre : string, pApellido : string, pLegajo : number, pSuperior : EmpleadoAbstracto|undefined)
    {
        this._apellido = pApellido;
        this._legajo=pLegajo;
        this._nombre = pNombre;
        
        if (pSuperior != undefined)
            this._superior = pSuperior;
      
            
    }

    public abstract autorizar(pMonto : number):void
}