"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//código, nombres, apellido, dirección y teléfono. 
var Paciente = /** @class */ (function () {
    function Paciente(pCodigo, pNombre, pApellido, pDireccion, pTelefono) {
        this._apellido = pApellido;
        this._codigo = pCodigo;
        this._nombre = pNombre;
        this._direccion = pDireccion;
        this._telefono = pTelefono;
    }
    Object.defineProperty(Paciente.prototype, "codigo", {
        get: function () {
            return this._codigo;
        },
        set: function (value) {
            this._codigo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paciente.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paciente.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (value) {
            this._apellido = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paciente.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (value) {
            this._direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paciente.prototype, "telefono", {
        get: function () {
            return this._telefono;
        },
        set: function (value) {
            this._telefono = value;
        },
        enumerable: false,
        configurable: true
    });
    return Paciente;
}());
exports.default = Paciente;
