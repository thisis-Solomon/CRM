"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Messenger = /** @class */ (function () {
    function Messenger(port) {
        this.port = port;
    }
    Messenger.prototype.messagePrint = function () {
        return "Node and express server is running on port ".concat(this.port);
    };
    return Messenger;
}());
exports.default = Messenger;
