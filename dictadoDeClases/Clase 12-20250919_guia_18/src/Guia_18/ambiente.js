"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ambiente = /** @class */ (function () {
    function Ambiente(pAncho, pLargo, pEsLuminoso, pTipo, pEsCubierto) {
        this._ancho = pAncho;
        this._largo = pLargo;
        this._tipo = pTipo;
        this._esLuminoso = pEsLuminoso;
        this._esCubierto = pEsCubierto;
    }
    Object.defineProperty(Ambiente.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        set: function (value) {
            this._ancho = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ambiente.prototype, "largo", {
        get: function () {
            return this._largo;
        },
        set: function (value) {
            this._largo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ambiente.prototype, "esLuminoso", {
        get: function () {
            return this._esLuminoso;
        },
        set: function (value) {
            this._esLuminoso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ambiente.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ambiente.prototype, "esCubierto", {
        get: function () {
            return this._esCubierto;
        },
        set: function (value) {
            this._esCubierto = value;
        },
        enumerable: false,
        configurable: true
    });
    Ambiente.prototype.dimension = function () {
        return this.ancho * this.largo;
    };
    return Ambiente;
}());
exports.default = Ambiente;
