/**
1.​ Crear una clase Persona que tenga los atributos públicos nombre y apellido.
* Crear una instancia y asignarle valores.
* Mostrar por pantalla los valores asignados.
*/
export {};

class Persona {
    public _nombre: string
    public _apellido: string

    constructor(nombre: string, apellido: string) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    getNombre(): string { return this._nombre; }
    setNombre(nombre: string): void { this._nombre = nombre; }

    getApellido(): string { return this._apellido; }
    setApellido(apellido: string): void { this._apellido = apellido; }
}

function main(): void {
    const myVariable: Persona = new Persona("Gastón", "Javier")
}


// Forma 2
const persona = new Persona("Gastón", "Javier");
console.log(`Nombre: ${persona._nombre}, Apellido: ${persona._apellido}`);