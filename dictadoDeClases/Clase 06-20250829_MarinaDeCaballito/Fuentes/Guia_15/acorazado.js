"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var barco_1 = require("./barco");
var Acorazado = /** @class */ (function (_super) {
    __extends(Acorazado, _super);
    function Acorazado(pNombre, pVelocidad, pFlotabilidad, pEstabilidad, pPotencia, pPeso) {
        var _this = _super.call(this, pNombre, pVelocidad, pFlotabilidad, pEstabilidad, pPeso) || this;
        _this._potenciaDeFuego = pPotencia;
        return _this;
    }
    Object.defineProperty(Acorazado.prototype, "PotenciaDeFuego", {
        get: function () {
            return this._potenciaDeFuego;
        },
        set: function (value) {
            this._potenciaDeFuego = value;
        },
        enumerable: false,
        configurable: true
    });
    Acorazado.prototype.presentarse = function () {
        return "Soy un Acorazado llamado " + this.nombre + " con una potencia de fuego " + this.PotenciaDeFuego.toString();
    };
    return Acorazado;
}(barco_1.default));
exports.default = Acorazado;
