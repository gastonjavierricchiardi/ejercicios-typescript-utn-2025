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
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.Tope = function () {
        return 2000;
    };
    Gerente.prototype.autorizar = function (pMonto) {
        if (this.Tope() > pMonto)
            console.log('El gerente ' + this.presentarse() + ' autorizó la compra de ' + pMonto);
        else if (this.superior != undefined)
            this.superior.autorizar(pMonto);
    };
    return Gerente;
}(empleadoabstracto_1.default));
exports.default = Gerente;
