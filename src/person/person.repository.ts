import personInterface from './person.interface';
import personModel from './person.model';

export const addPerson = (dacument: personInterface) => {
    const person = new personModel(dacument);
    person.save();
};

export const getPerson = (id: string) => {
    return personModel.findById(id).exec();
};

export const deletePerson = (id: string) => {
    personModel.findByIdAndDelete(id).exec();
};

export const updatePersonName = (id: string, personName: string) => {
    personModel.findByIdAndUpdate(id, {personName: personName}).exec();
};

export const updatePersonGroup = (id: string, personGroup: string) => {
    personModel.findByIdAndUpdate(id, {$push: {personGroups: personGroup}}).exec();
};

export const deletePersonGroup = (id: string, personGroup: string) => {
    personModel.findByIdAndUpdate(id, {$pull: {personGroups: personGroup}}).exec();
};

export const personGroup = (id: string) => {
    return personModel.findById(id).exec();
};

export const getPersonByName = (personName: string) => {
    return personModel.findOne({ personName: personName }).exec();
};