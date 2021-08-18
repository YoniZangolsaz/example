// import * as groupRepository from './group.repository';
// import IGroup from './group.interface';
// import * as personManager from '../person/person.manager';
// import UserError from '../utils/server';
// import { Types } from 'mongoose';
// let groupHierarchy: string = '';

// export async function creategroup(groupData: IGroup) {
//     const group: IGroup = groupData;
//     if (groupInputValidation(group)) return groupRepository.createGroup(group);
//     throw new UserError('cannot create group - missing component', 404);
// }

// export async function deleteGroup(id: string) {
//     if (await isValidId(id)) return groupRepository.deleteGroup(id);
//     throw new UserError('cannot delete group - not valid id', 404);
// }

// export async function updateGroupName(id: string, newName: string) {
//     if (isValidId(id)) return groupRepository.updateGroupName(id, newName);
//     throw new UserError('cannot update group name - not valid id', 404);
// }

// export async function getGroupById(id: string) {
//     if (isValidId(id)) return groupRepository.getGroupById(id);
//     throw new UserError('cannot find group - not valid id', 404);
// }

// export async function insertPersonToGroup(groupId: string, personId: string) {
//     if (isValidId(groupId) && isValidId(personId)) return groupRepository.insertPersonToGroup(groupId, personId);
//     throw new UserError('cannot insert person to group - groupId or personId not valid', 404);
// }

// export async function getGroupHierarchy(groupId: string) {
//     groupHierarchy = '';
//     if (isValidId(groupId)) return await arrangeHierarchically(groupId, 0);
//     throw new UserError('cannot get group Hierarchy - groupId not valid', 404);
// }

// async function AuxiliaryFunction() {
//     const result = await addSubGroupToGroup("602d388267b1682b30703dfc", "602d383f67b1682b30703dfa");
//     console.log(result);
// }

// async function addSubGroupToGroup(groupId: string, subGroupId: string) {
//     try {
//         const res1 = await isInSubGroup(groupId, subGroupId);
//         const res2 = await existsItSelf(groupId, subGroupId);
//         const flag = await groupRepository.isAncientAncestor(Types.ObjectId(groupId), Types.ObjectId(subGroupId));

//         if (flag || res1 || res2) {
//             return 'cannot add group';
//         } else {
//             await groupRepository.insertSubGroup(Types.ObjectId(groupId), Types.ObjectId(subGroupId));
//             return 'group added';
//         }
//     } catch (error) {
//         return 'error';
//     }
// }

// async function isInSubGroup(groupId: string, subGroupId: string) {
//     const group = await groupRepository.getGroupById(groupId);
//     const subGroups = group!.subGroups;
//     return subGroups.includes(Types.ObjectId(subGroupId));
// }

// async function existsItSelf(groupId: string, subGroupId: string) {
//     return (groupId === subGroupId);
// }

// async function arrangeHierarchically(groupId: string, spacing: number) {
//     groupHierarchy += "\n";
//     const group = await groupRepository.getGroupById(groupId);
//     const name = group!.name;
//     groupHierarchy += addHierarchicallySpacing(name, spacing);
//     groupHierarchy += "\n";
//     spacing += 1;
//     const idsArray = group!.participants;
//     const names: any = [];
//     for (let index = 0; index < idsArray.length; index++) {
//         names.push(await personManager.getPersonName(String(idsArray[index])));
//     }

//     await printParticipants(names, spacing);
//     if (group!.subGroups === null) {
//         return;
//     }

//     for (let i = 0; i < group!.subGroups.length; i++) {
//         groupHierarchy += '\n';
//         await arrangeHierarchically(String(group!.subGroups[i]), spacing);
//     }

//     return groupHierarchy;
// }

// function addHierarchicallySpacing(somethingToPrint: any, tagSize: number) {
//     let print = '';
//     for (let i = 0; i <= tagSize; i++) {
//         print += '  ';
//     }
//     print += `${somethingToPrint}`;
//     groupHierarchy += '\n';
//     return print;
// }

// async function printParticipants(participants: [Types.ObjectId], spacingAmount: number) {
//     spacingAmount += 1;
//     participants.forEach(async (par) => {
//         groupHierarchy += '\n';
//         groupHierarchy += addHierarchicallySpacing(par, spacingAmount);
//     });
// }

// export async function findPersonByGroup(groupId: string, name: string) {
//     if (isValidId(groupId)) {
//         const group = await groupRepository.getGroupById(groupId);
//         const participants = group!.participants;
//         const result = await findNameById(participants, name);
//         const person = await personManager.getPersonById(result);
//         return person;
//     }
//     throw new UserError('cannot get group Hierarchy', 404);

// }

// async function findNameById(participants: [Types.ObjectId], nameToFind: string) {
//     let result;
//     for await (const personId of participants) {
//         const name = await personManager.getPersonName(String(personId));
//         if (name === nameToFind) {
//             result = personId;
//         }
//     }
//     return String(result);
// }

// async function isValidId(id: any) {
//     let isObjectId = Types.ObjectId.isValid(id);
//     let res;
//     let isExistInDb = true;
//     if (isObjectId) {
//         res = await groupRepository.getGroupById(id);
//     }

//     if (res === null) {
//         isExistInDb = false
//     }
//     return isObjectId && isExistInDb;
// }

// function groupInputValidation(data: IGroup) {
//     if (!data.parent || !data.name || !data.participants || !data.subGroups) return false;
//     return true;
// }
