"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(pTexto, pAutor, pNombre) {
        this._name = "";
        this._author = "";
        this._text = ""; // constructor, getters and setters    public replaceWordInText(word: string): string { 
        this.name = pNombre;
        this.author = pAutor;
        this.text = pTexto;
    }
    Object.defineProperty(Book.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: false,
        configurable: true
    });
    Book.prototype.isWordInText = function (word) {
        return this.text.includes(word);
    };
    return Book;
}());
exports.default = Book;
