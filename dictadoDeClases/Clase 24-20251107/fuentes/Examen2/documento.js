"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Documento = /** @class */ (function () {
    function Documento(pNombre, pContenido) {
        this._contenido = pContenido;
        this._nombre = pNombre;
    }
    Object.defineProperty(Documento.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Documento.prototype, "contenido", {
        get: function () {
            return this._contenido;
        },
        set: function (value) {
            this._contenido = value;
        },
        enumerable: false,
        configurable: true
    });
    Documento.prototype.mostrarInfo = function () {
        return this._nombre + " " + this._contenido;
    };
    return Documento;
}());
exports.default = Documento;
