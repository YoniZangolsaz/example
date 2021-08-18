import groupInterface from './group.interface';
import groupModel from './group.model';

export const addGroup = (dacument: groupInterface) => {
    const person = new groupModel(dacument);
    person.save();
};

export const getGroup = async (id: string) => {
    return groupModel.findById(id);
};

export const deleteGroup = (id: string) => {
    groupModel.findByIdAndDelete(id).exec();
};

export const updateGroupName = (id: string, groupName: string) => {
    groupModel.findByIdAndUpdate(id, {groupName: groupName}).exec();
};

export const updatePersonInGroup = (id: string, personInGroup: string) => {
    groupModel.findByIdAndUpdate(id, {$push: {personInGroup: personInGroup}}).exec();
};

export const deletePersonInGroup = (id: string, personInGroup: string) => {
    groupModel.findByIdAndUpdate(id, {$pull: {personInGroup: personInGroup}}).exec();
};

export const updateContainingGroup = (id: string, containingGroup: string) => {
    groupModel.findByIdAndUpdate(id, {$push: {containingGroup: containingGroup}}).exec();
};

export const deleteContainingGroup = (id: string, containingGroup: string) => {
    groupModel.findByIdAndUpdate(id, {$pull: {containingGroup: containingGroup}}).exec();
};

export const getGroupByName = (groupName: string) => {
    return groupModel.findOne({ groupName: groupName }).exec();
};

export const updateFatherOfGroup = (id: string, father: string) => {
    groupModel.findByIdAndUpdate(id, {father: father}).exec();
};

export const deleteFatherOfGroup = (id: string) => {
    groupModel.findByIdAndUpdate(id, {father: "0"}).exec();
};