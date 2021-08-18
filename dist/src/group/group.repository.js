"use strict";
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
exports.deleteFatherOfGroup = exports.updateFatherOfGroup = exports.getGroupByName = exports.deleteContainingGroup = exports.updateContainingGroup = exports.deletePersonInGroup = exports.updatePersonInGroup = exports.updateGroupName = exports.deleteGroup = exports.getGroup = exports.addGroup = void 0;
const group_model_1 = __importDefault(require("./group.model"));
const addGroup = (dacument) => {
    const person = new group_model_1.default(dacument);
    person.save();
};
exports.addGroup = addGroup;
const getGroup = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return group_model_1.default.findById(id);
});
exports.getGroup = getGroup;
const deleteGroup = (id) => {
    group_model_1.default.findByIdAndDelete(id).exec();
};
exports.deleteGroup = deleteGroup;
const updateGroupName = (id, groupName) => {
    group_model_1.default.findByIdAndUpdate(id, { groupName: groupName }).exec();
};
exports.updateGroupName = updateGroupName;
const updatePersonInGroup = (id, personInGroup) => {
    group_model_1.default.findByIdAndUpdate(id, { $push: { personInGroup: personInGroup } }).exec();
};
exports.updatePersonInGroup = updatePersonInGroup;
const deletePersonInGroup = (id, personInGroup) => {
    group_model_1.default.findByIdAndUpdate(id, { $pull: { personInGroup: personInGroup } }).exec();
};
exports.deletePersonInGroup = deletePersonInGroup;
const updateContainingGroup = (id, containingGroup) => {
    group_model_1.default.findByIdAndUpdate(id, { $push: { containingGroup: containingGroup } }).exec();
};
exports.updateContainingGroup = updateContainingGroup;
const deleteContainingGroup = (id, containingGroup) => {
    group_model_1.default.findByIdAndUpdate(id, { $pull: { containingGroup: containingGroup } }).exec();
};
exports.deleteContainingGroup = deleteContainingGroup;
const getGroupByName = (groupName) => {
    return group_model_1.default.findOne({ groupName: groupName }).exec();
};
exports.getGroupByName = getGroupByName;
const updateFatherOfGroup = (id, father) => {
    group_model_1.default.findByIdAndUpdate(id, { father: father }).exec();
};
exports.updateFatherOfGroup = updateFatherOfGroup;
const deleteFatherOfGroup = (id) => {
    group_model_1.default.findByIdAndUpdate(id, { father: "0" }).exec();
};
exports.deleteFatherOfGroup = deleteFatherOfGroup;
