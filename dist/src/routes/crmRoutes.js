"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crmController_js_1 = require("../controllers/crmController.js");
var routes = function (app) {
    app.route('/contact')
        .get(function (req, res, next) {
        // middleware
        console.log("Request from: ".concat(req.originalUrl));
        console.log("Request type: ".concat(req.method));
        next();
    }, crmController_js_1.getContacts)
        // POST endpoint
        .post(crmController_js_1.addNewContact);
    app.route('/contact/:contactId')
        // get specific contact
        .get(crmController_js_1.getContactWithID)
        // put request
        .put(crmController_js_1.updateContact)
        // delete request
        .delete(crmController_js_1.deleteContact);
};
exports.default = routes;
