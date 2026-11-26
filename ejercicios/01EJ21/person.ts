export class Person {
    private _name: string;
    private _lastName: string;
    private _birthDate: Date;

    constructor(name: string, lastName: string, birthDate: Date) {
        this._name = name;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate.getTime());
    }

    public getName(): string {
        return this._name;
    }

    public getLastName(): string {
        return this._lastName;
    }

    public getBirthDate(): Date {
        return new Date(this._birthDate.getTime());
    }
}
