"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPersonGroup = exports.deletePersonGroup = exports.putPersonGroup = exports.putPersonName = exports.deletePerson = exports.getPerson = exports.postPerson = void 0;
const express_1 = __importDefault(require("express"));
const personManager = __importStar(require("./person.manager"));
const app = express_1.default();
// POST http://localhost:8000/person/:personName
const postPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personNameQuery = req.query.personName.toString();
    const personGroupsQuery = [];
    const dacument = {
        personName: personNameQuery,
        personGroups: personGroupsQuery
    };
    const answer = yield personManager.addPerson(dacument);
    res.send(answer);
});
exports.postPerson = postPerson;
// GET http://localhost:8000/person/:id
const getPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const answer = yield personManager.getPerson(id);
    res.send(answer);
});
exports.getPerson = getPerson;
// DELETE http://localhost:8000/person/:id
const deletePerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const answer = yield personManager.deletePerson(id);
    res.send(answer);
});
exports.deletePerson = deletePerson;
// PUT http://localhost:8000/person/name/:id:personName
const putPersonName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const personNameQuery = req.query.personName.toString();
    const answer = yield personManager.updatePersonName(id, personNameQuery);
    res.send(answer);
});
exports.putPersonName = putPersonName;
// PUT http://localhost:8000/person/group/:id:personGroups
const putPersonGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const personGroupQuery = req.query.personGroups.toString();
    const answer = yield personManager.updatePersonGroup(id, personGroupQuery);
    res.send(answer);
});
exports.putPersonGroup = putPersonGroup;
// DELETE http://localhost:8000/person/group/:id:personGroup
const deletePersonGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const personGroupQuery = req.query.personGroup.toString();
    const answer = yield personManager.deletePersonGroup(id, personGroupQuery);
    res.send(answer);
});
exports.deletePersonGroup = deletePersonGroup;
// GET http://localhost:8000/person/getALlPersonGroup/:id
const getAllPersonGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const answer = yield personManager.personGroup(id);
    res.send(answer);
});
exports.getAllPersonGroup = getAllPersonGroup;
