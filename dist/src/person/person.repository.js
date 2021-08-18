"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonByName = exports.personGroup = exports.deletePersonGroup = exports.updatePersonGroup = exports.updatePersonName = exports.deletePerson = exports.getPerson = exports.addPerson = void 0;
const person_model_1 = __importDefault(require("./person.model"));
const addPerson = (dacument) => {
    const person = new person_model_1.default(dacument);
    person.save();
};
exports.addPerson = addPerson;
const getPerson = (id) => {
    return person_model_1.default.findById(id).exec();
};
exports.getPerson = getPerson;
const deletePerson = (id) => {
    person_model_1.default.findByIdAndDelete(id).exec();
};
exports.deletePerson = deletePerson;
const updatePersonName = (id, personName) => {
    person_model_1.default.findByIdAndUpdate(id, { personName: personName }).exec();
};
exports.updatePersonName = updatePersonName;
const updatePersonGroup = (id, personGroup) => {
    person_model_1.default.findByIdAndUpdate(id, { $push: { personGroups: personGroup } }).exec();
};
exports.updatePersonGroup = updatePersonGroup;
const deletePersonGroup = (id, personGroup) => {
    person_model_1.default.findByIdAndUpdate(id, { $pull: { personGroups: personGroup } }).exec();
};
exports.deletePersonGroup = deletePersonGroup;
const personGroup = (id) => {
    return person_model_1.default.findById(id).exec();
};
exports.personGroup = personGroup;
const getPersonByName = (personName) => {
    return person_model_1.default.findOne({ personName: personName }).exec();
};
exports.getPersonByName = getPersonByName;
