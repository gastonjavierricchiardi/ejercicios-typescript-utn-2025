"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contacto = /** @class */ (function () {
    function Contacto(pNombre, pApellido, pEmail, pTelefono) {
        this._apellido = pApellido;
        this._email = pEmail;
        this._nombre = pNombre;
        this._telefono = pTelefono;
    }
    Object.defineProperty(Contacto.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (value) {
            this._apellido = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contacto.prototype, "telefono", {
        get: function () {
            return this._telefono;
        },
        set: function (value) {
            this._telefono = value;
        },
        enumerable: false,
        configurable: true
    });
    Contacto.prototype.info = function () {
        return this._apellido + ", " + this.nombre + " (" + this.telefono + " - " + this.email + ")";
    };
    return Contacto;
}());
exports.default = Contacto;
