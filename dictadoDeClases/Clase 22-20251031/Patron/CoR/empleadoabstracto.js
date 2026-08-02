"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmpleadoAbstracto = /** @class */ (function () {
    function EmpleadoAbstracto(pNombre, pApellido, pLegajo, pSuperior) {
        this._apellido = pApellido;
        this._legajo = pLegajo;
        this._nombre = pNombre;
        if (pSuperior != undefined)
            this._superior = pSuperior;
    }
    EmpleadoAbstracto.prototype.presentarse = function () {
        return this.apellido + ", " + this.legajo + " con legajo " + this.legajo;
    };
    Object.defineProperty(EmpleadoAbstracto.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmpleadoAbstracto.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (value) {
            this._apellido = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmpleadoAbstracto.prototype, "legajo", {
        get: function () {
            return this._legajo;
        },
        set: function (value) {
            this._legajo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmpleadoAbstracto.prototype, "superior", {
        get: function () {
            return this._superior;
        },
        set: function (value) {
            this._superior = value;
        },
        enumerable: false,
        configurable: true
    });
    return EmpleadoAbstracto;
}());
exports.default = EmpleadoAbstracto;
