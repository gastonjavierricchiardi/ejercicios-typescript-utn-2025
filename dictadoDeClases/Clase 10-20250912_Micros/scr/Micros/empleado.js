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
var persona_1 = require("./persona");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(pNombre, pApellido, pLegajo, pJefe, pEmpleadosACargo) {
        if (pJefe === void 0) { pJefe = undefined; }
        var _this = _super.call(this, pNombre, pApellido) || this;
        _this._legajo = pLegajo;
        _this._jefe = pJefe;
        _this._empleadosACargo = pEmpleadosACargo;
        return _this;
    }
    Object.defineProperty(Empleado.prototype, "legajo", {
        get: function () {
            return this._legajo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "jefe", {
        get: function () {
            return this._jefe;
        },
        enumerable: false,
        configurable: true
    });
    Empleado.prototype.esJefe = function () {
        //Si tengo al menos un empleado, soy jefe.
        if (this._empleadosACargo.size >= 1)
            return true;
        return false;
    };
    return Empleado;
}(persona_1.default));
exports.default = Empleado;
