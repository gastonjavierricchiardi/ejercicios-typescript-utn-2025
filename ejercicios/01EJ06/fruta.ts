// \01EJ06\fruta.ts


export default class Fruta {
    // Iniciamos todo con valores ya que es parte del enunciado
    private _color: string = "";
    private _peso: number = 0;
    private _esEstacional: boolean = false; // lo seteo con valor siempre como falso = "NO ESTACIONAL"
    // Multiples constructores o sobrecarga de constructores o overloading
    constructor(); // Firma del constructor 0
    constructor(color: string, peso: number, esEstacional: boolean); // Constructor 1
    constructor(color?: string, peso?: number, _esEstacional?: boolean) { // Constructor 2 con singno de "?" porque puede recibir cualquiera
        // Valores por defecto por si no tiene argumentos
        this._color = color ?? "";
        this._peso = peso ?? 0;
        //this._esEstacional = this._esEstacional ?? false; corregido CHATGPT
        this._esEstacional = _esEstacional ?? false;
    }
    // Opción 1 podemos validar en los setters el enunciado no lo pide
    // === PROPIEDADES ===
    // GETERS y SETTERS
    // COLOR
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        // (OPCIONAL) --> Validación mínima
        this._color = value.trim(); // trim limpia caracteres en blanco
    }
    // peso (en gramos)
    public get peso(): number {
        return this._peso;
    }
    public set peso(value: number) {
        // OPCIONAL si queremos evitar negativos lo tenemos que setear aquí
        this._peso = value >= 0 ? value : 0; // Evitamos nros negativos
    }
    // Estacional
    public get esEstacional(): boolean {
        return this._esEstacional;
    }
    public set esEstacional(value: boolean) {
        this._esEstacional = value;
    }
    // === REGLA DE NEGOCIO ===
    // Es comestible si solo pesa < 200 gr y es de estación.
    public esComestible(): boolean {
        return this._peso < 200 && this._esEstacional === true;
    }
}