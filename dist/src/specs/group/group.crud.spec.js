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
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
// import { startFunction } from '../../utils/index';
const groupManager = __importStar(require("../../group/group.manager"));
// startFunction();
let result = '';
describe("test CRUD function", function () {
    describe("create group", function () {
        const dacument = {
            groupName: "group",
            personInGroup: [],
            containingGroup: [],
            father: '0'
        };
        beforeEach(() => __awaiter(this, void 0, void 0, function* () {
            result = yield groupManager.addGroup(dacument);
        }));
        it("it should create a new group in db", (done) => {
            chai_1.expect(result).to.be.a('string');
            chai_1.expect(result).to.equal('added new group successfully');
            done();
        });
    });
    describe("get group info", function () {
        it("should return the group info from the db", function () {
        });
    });
    describe("", function () {
        it("delete group", function () {
        });
    });
    describe("", function () {
        it("update group name", function () {
        });
    });
    describe("", function () {
        it("hierarchy", function () {
        });
    });
    describe("", function () {
        it("get if person in group", function () {
        });
    });
    describe("", function () {
        it("update containing group", function () {
        });
    });
    describe("", function () {
        it("delete containing group", function () {
        });
    });
    describe("", function () {
        it("update father of group", function () {
        });
    });
    describe("", function () {
        it("delete father of group", function () {
        });
    });
    describe("", function () {
        it("get containing group of a group", function () {
        });
    });
    describe("", function () {
        it("get persons in a group", function () {
        });
    });
    describe("", function () {
        it("get persons name in a group", function () {
        });
    });
    describe("", function () {
        it("update person in a group", function () {
        });
    });
    describe("", function () {
        it("delete person in a group", function () {
        });
    });
});
