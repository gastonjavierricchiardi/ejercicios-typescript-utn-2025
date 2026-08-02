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
var empleadoabstracto_1 = require("./empleadoabstracto");
var Director = /** @class */ (function (_super) {
    __extends(Director, _super);
    function Director(pNombre, pApellido, pLegajo, pSuperior) {
        return _super.call(this, pNombre, pApellido, pLegajo, pSuperior) || this;
    }
    Director.prototype.Tope = function () {
        return 10000000;
    };
    Director.prototype.autorizar = function (pMonto) {
        if (this.Tope() > pMonto) {
            console.log('El director ' + this.presentarse() + ' aprobó el monto de ' + pMonto);
        }
    };
    return Director;
}(empleadoabstracto_1.default));
exports.default = Director;
