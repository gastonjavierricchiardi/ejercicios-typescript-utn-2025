export default class Book {   
    private _name: string = "";   
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _author: string = "";   
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }
    private _text: string = "";    // constructor, getters and setters    public replaceWordInText(word: string): string { 
    public get text(): string {
        return this._text;
    }
    public set text(value: string) {
        this._text = value;
    }

    constructor(pTexto: string, pAutor : string,  pNombre : string)
    {
        this.name=pNombre;
        this.author=pAutor;
        this.text=pTexto;
    }

    public isWordInText(word: string): boolean {
        return this.text.includes(word);   
    }

}

