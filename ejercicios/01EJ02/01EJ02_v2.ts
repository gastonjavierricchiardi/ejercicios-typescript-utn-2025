export {};

class Vehiculo {
    // **1) ATRIBUTOS
    public marca: string;
    public modelo: string;
    private _patente: string;
    // **2) CONSTRUCTOR
    constructor(marca: string, modelo: string, _patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this._patente = _patente;
    }
    // **3) PROPIRDADES (GET, SET)
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

function main(): void {
    // creamos la instancia y asignamos valores.
    const v1 = new Vehiculo("Chevrolet", "spin", "ZZ777OO")

    console.log(`Marca: ${v1.marca}`);
    console.log(`Modelo: ${v1.modelo}`);
    console.log(`Patente: ${v1.get_Patente()}`); // cómo es privado, se tiene que mostrar mediante el GET.

    // creamos un sergundo vehiculo.
    const v2 = new Vehiculo("Ford", "K", "GGG555")
    console.log(`Marca: ${v2.marca}`);
    console.log(`Modelo: ${v2.modelo}`);
    console.log(`Patente: ${v2.get_Patente()}`);

}

main();