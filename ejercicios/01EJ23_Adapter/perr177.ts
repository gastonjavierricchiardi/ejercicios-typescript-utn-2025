import { Perr177Data } from "./perr177Data";

export class Perr177 {
    private _id: number;
    private _datos: Perr177Data[];

    constructor(id: number, datos: Perr177Data[]) {
        this._id = id;
        this._datos = [...datos];
    }

    public getId(): number {
        return this._id;
    }

    public getDatos(): Perr177Data[] {
        return [...this._datos];
    }
}
