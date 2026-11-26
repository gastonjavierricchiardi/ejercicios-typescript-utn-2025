export class Gr0n3Object {
    private _size: string;
    private _type: string;
    private _kind: string;

    constructor(size: string, type: string, kind: string) {
        this._size = size;
        this._type = type;
        this._kind = kind;
    }

    public getSize(): string {
        return this._size;
    }

    public getType(): string {
        return this._type;
    }

    public getKind(): string {
        return this._kind;
    }
}
