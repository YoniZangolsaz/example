// import { expect } from 'chai';
// import * as groupManager from './group.manager';
// import { startApp } from '../utils/index';

// startApp();
// let result: any;

// describe('Group unit test', () => {

//     describe('create group', () => {
//         const group = { name: 'hashavot' };
//         beforeEach(async () => {
//             result = await groupManager.creategroup(group);
//         });
//         it('should create group', (done) => {
//             expect(result).to.be.a('Object');
//             expect(result).to.have.property('name');
//             done();
//         });
//     });

//     describe('delete group', () => {
//         const id: any = "6029379fb86a2a1048430e12";
//         beforeEach(async () => {
//             result = await groupManager.deleteGroup(id);
//         });
//         it('should delete group', (done) => {
//             expect(result).to.be.a('Object');
//             expect(result._id).equal(id);
//             expect(result).to.have.property('name');
//             done();
//         });
//     });

//     describe('update group name', () => {
//         const id = "603d0392679b592c3c221bf8";
//         const newName: string = 'sapirtest';
//         beforeEach(async () => {
//             result = await groupManager.updateGroupName(id, newName);
//         });

//         it('should update group name by his id', (done) => {
//             expect(result).to.be.a('Object');
//             expect(result).to.have.property('name');
//             expect(result.name).equal(newName);
//             done();
//         });
//     });

//     describe('get group', () => {
//         const id = "603d0392679b592c3c221bf8";
//         beforeEach(async () => {
//             result = await groupManager.getGroupById(id);
//         });
//         it('should get group by id', (done) => {
//             expect(result).to.be.a('Object');
//             expect(result).to.have.property('name');
//             done();
//         });
//     });

//     describe('insert person to group', () => {
//         const personId = "603ccd4c63f20935706f141e";
//         const groupId = '603d0392679b592c3c221bf8'
//         beforeEach(async () => {
//             result = await groupManager.insertPersonToGroup(groupId, personId);
//         });
//         it('should insert person to the group', (done) => {
//             expect(result).to.be.a('Object');
//             expect(result).to.have.property('name');
//             done();
//         });
//     });
// })
