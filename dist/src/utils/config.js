"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupCollectionName = exports.personCollectionName = exports.mongoDbPath = exports.dbName = exports.localHost = exports.serverPort = void 0;
exports.serverPort = 8000;
exports.localHost = 27017;
exports.dbName = 'personAndGroup';
exports.mongoDbPath = `mongodb://localhost:${exports.localHost}/${exports.dbName}`;
exports.personCollectionName = 'persons';
exports.groupCollectionName = 'groups';
