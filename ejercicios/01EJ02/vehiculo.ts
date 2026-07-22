// vehiculo.ts
export default class Vehiculo {
    // **1) ATRIBUTOS
    public marca: string;
    public modelo: string;
    private _patente: string;
    // **2) CONSTRUCTOR
    constructor(marca: string, modelo: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this._patente = patente;
    }
    // **3) PROPIEDADES (GET, SET)
    // Marca
    getMarca(): string { return this.marca };
    setMarca(v: string): void { this.marca = v };
    // Modelo
    getModelo(): string { return this.modelo };
    setModelo(v: string): void { this.modelo = v };
    // _Patente
    // aquí el tema de que no queremos que se cambie desde afuera
    get_Patente(): string { return this._patente };
    // **4) MÉTODOS
}