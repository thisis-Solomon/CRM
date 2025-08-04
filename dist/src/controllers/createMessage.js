"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Messenger = /** @class */ (function () {
    function Messenger(port, enviroment) {
        this.port = port;
        this.enviroment = enviroment;
    }
    Messenger.prototype.messagePrint = function () {
        return "Node and express server is running on port ".concat(this.port, " in ").concat(this.enviroment);
    };
    return Messenger;
}());
exports.default = Messenger;
