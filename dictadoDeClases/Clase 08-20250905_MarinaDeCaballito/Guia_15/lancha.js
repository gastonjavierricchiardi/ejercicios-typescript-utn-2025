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
var Lancha = /** @class */ (function (_super) {
    __extends(Lancha, _super);
    function Lancha(pNombre, pVelocidad, pFlotabilidad, pEstabilidad, pMotor, pPeso) {
        var _this = _super.call(this, pNombre, pVelocidad, pFlotabilidad, pEstabilidad, pPeso) || this;
        _this._motorFueraDeBorda = false;
        _this.MotorFueraDeBorda = pMotor;
        return _this;
    }
    Object.defineProperty(Lancha.prototype, "MotorFueraDeBorda", {
        get: function () {
            return this._motorFueraDeBorda;
        },
        set: function (value) {
            this._motorFueraDeBorda = value;
        },
        enumerable: false,
        configurable: true
    });
    Lancha.prototype.remolcar = function (objeto) {
        if (objeto.peso() > 300)
            console.log("¡Pesa más de 300 " + objeto.descripcion);
        else
            console.log("Estamos remolcando a " + objeto.descripcion);
    };
    Lancha.prototype.presentarse = function () {
        return "Soy una lancha llamada " + this.nombre;
    };
    return Lancha;
}(barco_1.default));
exports.default = Lancha;
