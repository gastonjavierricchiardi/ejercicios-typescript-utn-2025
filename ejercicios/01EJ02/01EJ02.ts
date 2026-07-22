/**
 * 2.​Crear una clase Vehiculo que tenga los atributos:
 * públicos:
 * -> marca
 * -> modelo
 * Privado: 
 * -> patente.
    ●​ Crear una instancia y asignarle valores;
    notar que el atributo privado no está disponible para la asignación de valores.
    ●​ Mostrar por pantalla los valores asignados.
*/


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
    const v1 = new Vehiculo("Chevrolet", "spin", "AD921HB")

    console.log(v1.marca);
    console.log(v1.modelo);
    // console.log(v1._patente); // Da error porque es private
    console.log(v1.get_Patente());

    // creamos un sergundo vehiculo.
    const v2 = new Vehiculo("Ford", "K", "FMM164")

    console.log(v2.marca);
    console.log(v2.modelo);
    // console.log(v1._patente); // Da error porque es private
    console.log(v2.get_Patente());
}

main();