"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Barco = /** @class */ (function () {
    function Barco(pNombre, pVelocidad, pFlotabilidad, pEstabilidad, pPeso) {
        this.nombre = pNombre;
        this.velocidad = pVelocidad;
        this.estabilidad = pEstabilidad;
        this.flotabilidad = pFlotabilidad;
        this._peso = pPeso;
    }
    Barco.prototype.descripcion = function () {
        return this.nombre;
    };
    Barco.prototype.peso = function () {
        return this._peso;
    };
    Object.defineProperty(Barco.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barco.prototype, "velocidad", {
        get: function () {
            return this._velocidad;
        },
        set: function (value) {
            this._velocidad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barco.prototype, "flotabilidad", {
        get: function () {
            return this._flotabilidad;
        },
        set: function (value) {
            this._flotabilidad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Barco.prototype, "estabilidad", {
        get: function () {
            return this._estabilidad;
        },
        set: function (value) {
            this._estabilidad = value;
        },
        enumerable: false,
        configurable: true
    });
    return Barco;
}());
exports.default = Barco;
