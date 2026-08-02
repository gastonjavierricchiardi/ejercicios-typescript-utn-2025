"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookPrinter = /** @class */ (function () {
    function BookPrinter() {
    }
    ;
    BookPrinter.prototype.printTextToConsole = function (unLibro) {
        console.log(unLibro.text);
    };
    return BookPrinter;
}());
exports.default = BookPrinter;
