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
exports.deletePersonInGroup = exports.updatePersonInGroup = exports.getPersonNameInGroupArray = exports.getPersonInArray = exports.getGroupInArray = exports.deleteFatherOfGroup = exports.updateFatherOfGroup = exports.deleteContainingGroup = exports.updateContainingGroup = exports.getIfPersonInGroup = exports.hierarchy = exports.updateGroupName = exports.deleteGroup = exports.getGroup = exports.addGroup = void 0;
const groupRepository = __importStar(require("./group.repository"));
const personManager = __importStar(require("../person/person.manager"));
const addGroup = (dacument) => {
    try {
        groupRepository.addGroup(dacument);
        return 'added new group successfully';
    }
    catch (error) {
        return error;
    }
};
exports.addGroup = addGroup;
const getGroup = (id) => {
    try {
        return groupRepository.getGroup(id);
    }
    catch (error) {
        return error;
    }
};
exports.getGroup = getGroup;
const deleteGroup = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fatherGroup = exports.getGroup(id);
        if (!(fatherGroup.father === '0')) {
            exports.deleteContainingGroup(fatherGroup.father, id);
        }
        yield deleteRec(id);
        return 'delete group hierarchy successfully';
    }
    catch (error) {
        return error;
    }
});
exports.deleteGroup = deleteGroup;
function deleteRec(groupId) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = yield exports.getGroup(groupId);
        const childrenGroupIdArray = group.containingGroup;
        const persons = group.personInGroup;
        for (let groupIndex = 0; groupIndex < childrenGroupIdArray.length; groupIndex++) {
            yield deleteRec(childrenGroupIdArray[groupIndex]);
        }
        for (let personIndex = 0; personIndex < persons.length; personIndex++) {
            yield personManager.deletePersonGroup(persons[personIndex], groupId);
        }
        yield groupRepository.deleteGroup(groupId);
    });
}
const updateGroupName = (id, groupName) => {
    try {
        groupRepository.updateGroupName(id, groupName);
        return 'update group name successfully';
    }
    catch (error) {
        return error;
    }
};
exports.updateGroupName = updateGroupName;
const hierarchy = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const groupId = id;
        const hierarchyStr = '';
        const space = '';
        return yield hierarchyRecPromises(groupId, hierarchyStr, space);
    }
    catch (error) {
        return error;
    }
});
exports.hierarchy = hierarchy;
function hierarchyRecPromises(groupId, hierarchyStr, space) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield exports.getGroup(groupId);
        hierarchyStr += result.groupName + ", people in group - ";
        const personPromises = result.personInGroup.map((person) => personManager.getPerson(person));
        yield Promise.all(personPromises)
            .then((personInfo) => __awaiter(this, void 0, void 0, function* () {
            hierarchyStr += personInfo.personName + ", ";
        }));
        hierarchyStr += '\n';
        space += '     ';
        const groupPromises = result.containingGroup.map((group) => hierarchyRecPromises(group, '', space));
        yield Promise.all(groupPromises)
            .then((groupInfo) => {
            hierarchyStr += space + groupInfo;
        });
        return hierarchyStr;
    });
}
const getIfPersonInGroup = (personName, groupName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let answer = "person not in group";
        const personObject = yield personManager.getPersonByName(personName);
        const groupObject = yield groupRepository.getGroupByName(groupName);
        const group = yield exports.getGroup(groupObject._id);
        if (group.personInGroup.includes(personObject._id)) {
            answer = "person in group";
        }
        return answer;
    }
    catch (error) {
        return error;
    }
});
exports.getIfPersonInGroup = getIfPersonInGroup;
const updateContainingGroup = (id, containingGroup) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (id === containingGroup) {
            return 'cant add group to the same group';
        }
        const groupArray = yield exports.getGroupInArray(id);
        if (groupArray.includes(containingGroup)) {
            return 'already in group';
        }
        const childGroup = exports.getGroup(containingGroup);
        yield exports.deleteContainingGroup(childGroup.father, containingGroup);
        yield exports.updateFatherOfGroup(containingGroup, id);
        groupRepository.updateContainingGroup(id, containingGroup);
        return 'update containing group successfully';
    }
    catch (error) {
        return error;
    }
});
exports.updateContainingGroup = updateContainingGroup;
const deleteContainingGroup = (id, containingGroup) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (id === containingGroup) {
            return 'cant delete group from the same group';
        }
        yield exports.deleteFatherOfGroup(containingGroup);
        groupRepository.deleteContainingGroup(id, containingGroup);
        return 'delete containing group successfully';
    }
    catch (error) {
        return error;
    }
});
exports.deleteContainingGroup = deleteContainingGroup;
const updateFatherOfGroup = (id, father) => {
    try {
        groupRepository.updateFatherOfGroup(id, father);
        return 'update father of group successfully';
    }
    catch (error) {
        return error;
    }
};
exports.updateFatherOfGroup = updateFatherOfGroup;
const deleteFatherOfGroup = (id) => {
    try {
        groupRepository.deleteFatherOfGroup(id);
        return 'delete father of group successfully';
    }
    catch (error) {
        return error;
    }
};
exports.deleteFatherOfGroup = deleteFatherOfGroup;
const getGroupInArray = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const group = yield exports.getGroup(id);
        return group.containingGroup;
    }
    catch (error) {
        return error;
    }
});
exports.getGroupInArray = getGroupInArray;
const getPersonInArray = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.getGroup(id).personInGroup;
    }
    catch (error) {
        return error;
    }
});
exports.getPersonInArray = getPersonInArray;
const getPersonNameInGroupArray = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personNameArray = [];
        const group = yield exports.getGroup(id);
        for (let pesonIndex = 0; pesonIndex < group.personInGroup.length; pesonIndex++) {
            let personInfo = personManager.getPerson(group.personInGroup[pesonIndex]);
            personNameArray.push(personInfo.personName);
        }
        return personNameArray;
    }
    catch (error) {
        return error;
    }
});
exports.getPersonNameInGroupArray = getPersonNameInGroupArray;
const updatePersonInGroup = (id, personInGroup) => {
    try {
        groupRepository.updatePersonInGroup(id, personInGroup);
    }
    catch (error) {
        return error;
    }
};
exports.updatePersonInGroup = updatePersonInGroup;
const deletePersonInGroup = (id, personInGroup) => {
    try {
        groupRepository.deletePersonInGroup(id, personInGroup);
    }
    catch (error) {
        return error;
    }
};
exports.deletePersonInGroup = deletePersonInGroup;
