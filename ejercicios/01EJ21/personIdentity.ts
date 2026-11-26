import { Person } from "./person";

export class PersonIdentity {
    private _person: Person;
    private _datosValidos: boolean;

    constructor(person: Person, datosValidos: boolean) {
        this._person = person;
        this._datosValidos = datosValidos;
    }

    public getInfo(dni: string): Person {
        if (!this._datosValidos || dni.trim() === "") {
            throw new Error(`No se pudo validar la identidad del DNI "${dni}".`);
        }

        return this._person;
    }
}
