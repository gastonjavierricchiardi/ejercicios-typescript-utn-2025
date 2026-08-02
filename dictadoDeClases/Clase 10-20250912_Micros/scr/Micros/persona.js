"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido) {
        this._nombre = pNombre;
        this._apellido = pApellido;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
exports.default = Persona;
