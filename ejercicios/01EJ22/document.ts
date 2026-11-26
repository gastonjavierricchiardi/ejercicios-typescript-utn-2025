export class Document {
    private _id: number;
    private _issueDate: Date;
    private _body: string;
    private _responsible: string;

    constructor(id: number, issueDate: Date, body: string, responsible: string) {
        this._id = id;
        this._issueDate = new Date(issueDate.getTime());
        this._body = body;
        this._responsible = responsible;
    }

    public getId(): number {
        return this._id;
    }

    public getIssueDate(): Date {
        return new Date(this._issueDate.getTime());
    }

    public getBody(): string {
        return this._body;
    }

    public getResponsible(): string {
        return this._responsible;
    }
}
