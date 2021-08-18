import personInterface from './person.interface';
import * as personRepository from './person.repository';
import * as groupManager from '../group/group.manager';

export const addPerson = (dacument: personInterface) => {
    try {
        personRepository.addPerson(dacument);
        return 'added new person successfully';
    } 
    catch (error) {
        return error;
    }
};

export const getPerson = (id: string) => {
    try {
        return personRepository.getPerson(id);
    } 
    catch (error) {
        return error;
    }
};

export const deletePerson = async (id: string) => {
    try {
        const person: any = await getPerson(id);

        for (let groupIndex = 0; groupIndex < person.personGroups.length; groupIndex++) {
            await groupManager.deletePersonInGroup(person.personGroups[groupIndex], id);
        }

        personRepository.deletePerson(id);
        return 'delete person successfully';
    } 
    catch (error) {
        return error;
    }
};

export const updatePersonName = (id: string, personName: string) => {
    try {
        personRepository.updatePersonName(id, personName);
        return 'update person name successfully';
    } 
    catch (error) {
        return error;
    }
};

export const updatePersonGroup = async (id: string, personGroup: string) => {
    try {
        const person: any = await getPerson(id);

        if (person.personGroups.includes(personGroup)) {
            return 'person alredy in group';
        }

        await groupManager.updatePersonInGroup(personGroup, id);
        personRepository.updatePersonGroup(id, personGroup);
        return 'update person group successfully';
    } 
    catch (error) {
        return error;
    }
};

export const deletePersonGroup = async (id: string, personGroup: string) => {
    try {
        await groupManager.deletePersonInGroup(personGroup, id);
        personRepository.deletePersonGroup(id, personGroup);
        return 'delete person gruop successfully';
    }
    catch (error) {
        return error;
    }
};

export const personGroup = async (id: string) => {
    try {
        const result: any = await personRepository.personGroup(id);
        return result.personGroups.join(', ');
    } 
    catch (error) {
        return error;
    }
};

export const getPersonByName = async (personName: string) => {
    try {
        return await personRepository.getPersonByName(personName);
    } 
    catch (error) {
        return error;
    }
};