/**
1.​Crear una clase Persona que tenga los atributos públicos nombre y apellido.
●​ Crear una instancia y asignarle valores.
●​ Mostrar por pantalla los valores asignados.
 */
export {};

class Persona {
    public nombre: string
    public apellido: string

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombre(): string { return this.nombre; }
    setNombre(nombre: string): void { this.nombre = nombre; }

    getApellido(): string { return this.apellido = this.apellido; }
    setApellido(apellido: string): void { this.apellido = apellido; }
}

function main(): void {
    const myVariable: Persona = new Persona("Gastón", "Ricchiardi")
}


// Forma 2
const persona = new Persona("Gastón", "Ricchiardi");
console.log(`Nombre: ${persona.nombre}, Apellido: ${persona.apellido}`);