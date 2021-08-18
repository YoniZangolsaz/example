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
exports.deleteContainingGroup = exports.putGroupNewGroup = exports.getIfPersonInGroup = exports.getHierarchy = exports.putGroupName = exports.deleteGroup = exports.getGroup = exports.postGroup = void 0;
const express_1 = __importDefault(require("express"));
const groupManager = __importStar(require("./group.manager"));
const app = express_1.default();
// POST http://localhost:8000/group/
const postGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const groupNameQuery = req.query.groupName.toString();
    const personInGroupQuery = [];
    const containingGroupQuery = [];
    const fatherQuery = "0";
    const dacument = {
        groupName: groupNameQuery,
        personInGroup: personInGroupQuery,
        containingGroup: containingGroupQuery,
        father: fatherQuery
    };
    const answer = yield groupManager.addGroup(dacument);
    res.send(answer);
});
exports.postGroup = postGroup;
// GET http://localhost:8000/group/:id
const getGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const answer = yield groupManager.getGroup(id);
    res.send(answer);
});
exports.getGroup = getGroup;
// DELETE http://localhost:8000/group/:id
const deleteGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const answer = yield groupManager.deleteGroup(id);
    res.send(answer);
});
exports.deleteGroup = deleteGroup;
// PUT http://localhost:8000/group/name/:id:groupName
const putGroupName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const groupNameQuery = req.query.groupName.toString();
    const answer = yield groupManager.updateGroupName(id, groupNameQuery);
    res.send(answer);
});
exports.putGroupName = putGroupName;
// GET http://localhost:8000/group/hierarchy/:id
const getHierarchy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const answer = yield groupManager.hierarchy(id);
    res.send(answer);
});
exports.getHierarchy = getHierarchy;
// GET http://localhost:8000/group/searchPerson/:personName:groupName
const getIfPersonInGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personNameQuery = req.query.personName.toString();
    const groupNameQuery = req.query.groupName.toString();
    const answer = yield groupManager.getIfPersonInGroup(personNameQuery, groupNameQuery);
    res.send(answer);
});
exports.getIfPersonInGroup = getIfPersonInGroup;
// PUT http://localhost:8000/group/group/:id:containingGroup
const putGroupNewGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const containingGroupQuery = req.query.containingGroup.toString();
    const answer = yield groupManager.updateContainingGroup(id, containingGroupQuery);
    res.send(answer);
});
exports.putGroupNewGroup = putGroupNewGroup;
// DELETE http://localhost:8000/group/group/:id:containingGroup
const deleteContainingGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id.toString();
    const containingGroupQuery = req.query.containingGroup.toString();
    const answer = yield groupManager.deleteContainingGroup(id, containingGroupQuery);
    res.send(answer);
});
exports.deleteContainingGroup = deleteContainingGroup;
