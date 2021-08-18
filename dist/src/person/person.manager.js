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
exports.getPersonByName = exports.personGroup = exports.deletePersonGroup = exports.updatePersonGroup = exports.updatePersonName = exports.deletePerson = exports.getPerson = exports.addPerson = void 0;
const personRepository = __importStar(require("./person.repository"));
const groupManager = __importStar(require("../group/group.manager"));
const addPerson = (dacument) => {
    try {
        personRepository.addPerson(dacument);
        return 'added new person successfully';
    }
    catch (error) {
        return error;
    }
};
exports.addPerson = addPerson;
const getPerson = (id) => {
    try {
        return personRepository.getPerson(id);
    }
    catch (error) {
        return error;
    }
};
exports.getPerson = getPerson;
const deletePerson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield exports.getPerson(id);
        for (let groupIndex = 0; groupIndex < person.personGroups.length; groupIndex++) {
            yield groupManager.deletePersonInGroup(person.personGroups[groupIndex], id);
        }
        personRepository.deletePerson(id);
        return 'delete person successfully';
    }
    catch (error) {
        return error;
    }
});
exports.deletePerson = deletePerson;
const updatePersonName = (id, personName) => {
    try {
        personRepository.updatePersonName(id, personName);
        return 'update person name successfully';
    }
    catch (error) {
        return error;
    }
};
exports.updatePersonName = updatePersonName;
const updatePersonGroup = (id, personGroup) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield exports.getPerson(id);
        if (person.personGroups.includes(personGroup)) {
            return 'person alredy in group';
        }
        yield groupManager.updatePersonInGroup(personGroup, id);
        personRepository.updatePersonGroup(id, personGroup);
        return 'update person group successfully';
    }
    catch (error) {
        return error;
    }
});
exports.updatePersonGroup = updatePersonGroup;
const deletePersonGroup = (id, personGroup) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield groupManager.deletePersonInGroup(personGroup, id);
        personRepository.deletePersonGroup(id, personGroup);
        return 'delete person gruop successfully';
    }
    catch (error) {
        return error;
    }
});
exports.deletePersonGroup = deletePersonGroup;
const personGroup = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield personRepository.personGroup(id);
        return result.personGroups.join(', ');
    }
    catch (error) {
        return error;
    }
});
exports.personGroup = personGroup;
const getPersonByName = (personName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield personRepository.getPersonByName(personName);
    }
    catch (error) {
        return error;
    }
});
exports.getPersonByName = getPersonByName;
