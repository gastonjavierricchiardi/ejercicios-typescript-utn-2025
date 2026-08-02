export default  class  Contacto
{
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
    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    private _telefono: string;
    public get telefono(): string {
        return this._telefono;
    }
    public set telefono(value: string) {
        this._telefono = value;
    }


    public info():string
    {
        return this._apellido + ", " + this.nombre + " (" + this.telefono + " - " + this.email + ")";
    }

    public constructor (pNombre : string, pApellido : string, pEmail : string, pTelefono : string)
    {
        this._apellido = pApellido;
        this._email = pEmail;
        this._nombre = pNombre;
        this._telefono=pTelefono;
    }

}