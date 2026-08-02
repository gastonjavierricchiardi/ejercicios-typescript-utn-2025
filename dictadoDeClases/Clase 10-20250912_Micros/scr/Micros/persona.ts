export default  abstract class   Persona
{
    private _nombre : string;
    private _apellido : string;

    
    public get nombre() : string {
        return this._nombre;
    }

    
    public get apellido() : string {
        return this._apellido;
    }
    

    public constructor ( pNombre : string, pApellido : string )
    {
        this._nombre = pNombre;
        this._apellido = pApellido;
    }
    

    
}