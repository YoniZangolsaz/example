import * as config from '../utils/config';
import personInterface from '../person/person.interface';
import mongoose, { Model, Schema, Document } from 'mongoose';

const personSchema: Schema = new Schema({
    personName: { required: true, type: String, index: true },
    personGroups: { required: true, type: [String] },
}, {versionKey: false});

const personModel = mongoose.model<personInterface & Document>(config.personCollectionName, personSchema, config.personCollectionName);
export default personModel; 