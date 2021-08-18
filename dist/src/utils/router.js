"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const person_router_1 = __importDefault(require("../person/person.router"));
const group_router_1 = __importDefault(require("../group/group.router"));
const router = express_1.default.Router();
function routers(app) {
    app.use('/person', person_router_1.default);
    app.use('/group', group_router_1.default);
}
exports.default = routers;
