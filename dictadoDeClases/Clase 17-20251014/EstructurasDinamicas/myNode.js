"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyNode = /** @class */ (function () {
    function MyNode(value) {
        this._value = value;
        this._next = undefined;
    }
    Object.defineProperty(MyNode.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (n) {
            this._next = n;
        },
        enumerable: false,
        configurable: true
    });
    return MyNode;
}());
exports.default = MyNode;
