import * as config from '../utils/config';
import groupInterface from '../group/group.interface';
import mongoose, { Model, Schema, Document } from 'mongoose';

export const groupSchema: Schema = new Schema({
    groupName: { required: true, type: String, index: true },
    personInGroup : { required: true, type: [String] },
    containingGroup: { required: true, type: [String] },
    father: { required: true, type: String }
}, {versionKey: false});

const groupModel = mongoose.model<groupInterface & Document>(config.groupCollectionName, groupSchema, config.groupCollectionName);

export default groupModel;