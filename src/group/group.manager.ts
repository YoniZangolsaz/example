import groupInterface from './group.interface';
import * as groupRepository from './group.repository';
import * as personManager from '../person/person.manager';

export const addGroup = (dacument: groupInterface) => {
    try {
        groupRepository.addGroup(dacument);
        return 'added new group successfully';
    } 
    catch (error) {
        return error;
    }
};

export const getGroup = (id: string) => {
    try {
        return groupRepository.getGroup(id);
    } 
    catch (error) {
        return error;
    }
};

export const deleteGroup = async (id: string) => {
    try {
        const fatherGroup: any = getGroup(id);

        if (!(fatherGroup.father === '0')) {
            deleteContainingGroup(fatherGroup.father, id);
        }

        await deleteRec(id);
        return 'delete group hierarchy successfully';
    } 
    catch (error) {
        return error;
    }
};

async function deleteRec(groupId: string) {
    const group: any = await getGroup(groupId);
    const childrenGroupIdArray: string[] = group.containingGroup;
    const persons: string[] = group.personInGroup;

    for (let groupIndex = 0; groupIndex < childrenGroupIdArray.length; groupIndex++) {
        await deleteRec(childrenGroupIdArray[groupIndex]);
    }     

    for (let personIndex = 0; personIndex < persons.length; personIndex++) {
        await personManager.deletePersonGroup(persons[personIndex], groupId);
    }

    await groupRepository.deleteGroup(groupId);
}

export const updateGroupName = (id: string, groupName: string) => {
    try {
        groupRepository.updateGroupName(id, groupName);
        return 'update group name successfully';
    } 
    catch (error) {
        return error;
    }
};

export const hierarchy = async (id: string) => {
    try {
        const groupId: string = id;
        const hierarchyStr: string = '';
        const space: string = '';

        return await hierarchyRecPromises(groupId, hierarchyStr, space);
    }
    catch (error) {
        return error;
    }
};

async function hierarchyRecPromises (groupId: string, hierarchyStr: string, space: string) {
    const result = await getGroup(groupId);
    hierarchyStr += result.groupName + ", people in group - ";

    const personPromises = result.personInGroup.map((person: string) => personManager.getPerson(person));

    await Promise.all(personPromises)
    .then(async (personInfo: any) => {
        hierarchyStr += personInfo.personName + ", ";
    });

    hierarchyStr += '\n';
    space += '     ';

    const groupPromises = result.containingGroup.map((group: string) => hierarchyRecPromises(group, '', space));
    
    await Promise.all(groupPromises)
    .then((groupInfo: any) => {
        hierarchyStr += space + groupInfo;
    });

    return hierarchyStr;
}

export const getIfPersonInGroup = async (personName: string, groupName: string) => {
    try {
        let answer: string = "person not in group";

        const personObject: any = await personManager.getPersonByName(personName);
        const groupObject: any = await groupRepository.getGroupByName(groupName);

        const group: any = await getGroup(groupObject._id);

        if (group.personInGroup.includes(personObject._id)) {
            answer = "person in group";
        }

        return answer;
    } 
    catch (error) {
        return error;
    }
};

export const updateContainingGroup = async (id: string, containingGroup: string) => {
    try {
        if (id === containingGroup) {
            return 'cant add group to the same group';
        }
        
        const groupArray: string[] = await getGroupInArray(id);
        if (groupArray.includes(containingGroup)) {
            return 'already in group';
        }

        const childGroup: any = getGroup(containingGroup);
        await deleteContainingGroup(childGroup.father, containingGroup);
        await updateFatherOfGroup(containingGroup, id);

        groupRepository.updateContainingGroup(id, containingGroup);
        return 'update containing group successfully';
    }
    catch (error) {
        return error;
    }
};

export const deleteContainingGroup = async (id: string, containingGroup: string) => {
    try {
        if (id === containingGroup) {
            return 'cant delete group from the same group';
        }

        await deleteFatherOfGroup(containingGroup);

        groupRepository.deleteContainingGroup(id, containingGroup);
        return 'delete containing group successfully';
    } 
    catch (error) {
        return error;
    }
};

export const updateFatherOfGroup = (id: string, father: string) => {
    try {
        groupRepository.updateFatherOfGroup(id, father);
        return 'update father of group successfully';
    } 
    catch (error) {
        return error;
    }
};

export const deleteFatherOfGroup = (id: string) => {
    try {
        groupRepository.deleteFatherOfGroup(id);
        return 'delete father of group successfully';
    } 
    catch (error) {
        return error;
    }
};

export const getGroupInArray = async (id: string) => {
    try {
        const group: any = await getGroup(id);
        return group.containingGroup;
    }
    catch (error) {
        return error;
    }
};

export const getPersonInArray = async (id: string) => {
    try {
        return await getGroup(id).personInGroup;
    }
    catch (error) {
        return error;
    }
};

export const getPersonNameInGroupArray = async (id: string) => {
    try {
        const personNameArray: string[] = [];
        const group: any  = await getGroup(id);

        for (let pesonIndex = 0; pesonIndex < group.personInGroup.length; pesonIndex++) {
            let personInfo: any = personManager.getPerson(group.personInGroup[pesonIndex]);
            personNameArray.push(personInfo.personName);
        }

        return personNameArray;
    }
    catch (error) {
        return error;
    }
};

export const updatePersonInGroup = (id: string, personInGroup: string) => {
    try {
        groupRepository.updatePersonInGroup(id, personInGroup);
    }
    catch (error) {
        return error;
    }
};

export const deletePersonInGroup = (id: string, personInGroup: string) => {
    try {
        groupRepository.deletePersonInGroup(id, personInGroup);
    } 
    catch (error) {
        return error;
    }
};