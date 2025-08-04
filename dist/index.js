"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var crmRoutes_js_1 = __importDefault(require("./src/routes/crmRoutes.js"));
var settings_1 = require("./settings");
var createMessage_1 = __importDefault(require("./src/controllers/createMessage"));
var app = (0, express_1.default)();
var PORT = 3000;
var enviroment = "development";
// mongoose connection
var database = 'mongodb://localhost/CRMdb';
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(database);
// bodyparser setup
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
(0, crmRoutes_js_1.default)(app);
// serving static files
app.use(express_1.default.static('public'));
var message = new createMessage_1.default(settings_1.Settings.PORT, enviroment);
app.get('/', function (req, res) {
    return res.send(message.messagePrint());
});
app.listen(settings_1.Settings.PORT, function () {
    return console.log(message.messagePrint());
});
