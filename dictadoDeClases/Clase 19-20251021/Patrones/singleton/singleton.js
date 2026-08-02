"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Presidente = /** @class */ (function () {
    function Presidente(pNombre, pApellido, pTitulo) {
        this._apellido = pApellido;
        this._nombre = pNombre;
        this._titulo = pTitulo;
    }
    Object.defineProperty(Presidente.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Presidente.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (value) {
            this._apellido = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Presidente.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Presidente, "unicaInstancia", {
        get: function () {
            return Presidente._unicaInstancia;
        },
        enumerable: false,
        configurable: true
    });
    Presidente.nuevoPresidente = function (pNombre, pApellido, pTitulo) {
        Presidente._unicaInstancia = new Presidente(pNombre, pApellido, pTitulo);
    };
    Presidente.presentarse = function () {
        if (Presidente.unicaInstancia)
            return "Excelentisimo/a " + Presidente.unicaInstancia.titulo + " " + Presidente.unicaInstancia.apellido + ", " + Presidente.unicaInstancia.nombre;
        else
            return "Vacante";
    };
    return Presidente;
}());
exports.default = Presidente;
