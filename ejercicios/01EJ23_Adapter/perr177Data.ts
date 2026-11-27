import { FPType } from "./fpType";
import { FPGender } from "./fpGender";

export class Perr177Data {
    private _type: FPType;
    private _size: string;
    private _gender: FPGender;

    constructor(type: FPType, size: string, gender: FPGender) {
        this._type = type;
        this._size = size;
        this._gender = gender;
    }

    public getType(): FPType {
        return this._type;
    }

    public getSize(): string {
        return this._size;
    }

    public getGender(): FPGender {
        return this._gender;
    }
}
