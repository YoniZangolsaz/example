"use strict";
// import chai from 'chai';
// import { startApp } from '../utils/index';
// import { app } from '../utils/server';
// import request from 'supertest';
// const expect = chai.expect;
// startApp();
// describe('Group API', () => {
//     describe('GET /group/:id', () => {
//         it('should get group by id', (done) => {
//             const id = '603d0392679b592c3c221bf8';
//             request(app).get(`/group/${id}`).end((err, res) => {
//                 expect(res.body).to.be.a('Object');
//                 expect(res.body).to.have.property('name');
//                 expect(res.body).to.have.property('participants');
//                 done();
//             });
//         });
//     });
//     describe('DELETE /group/:id', () => {
//         const id = '603d0392679b592c3c221bf8';
//         it('should delete group by id', (done) => {
//             request(app).delete(`/group/${id}`).end((err, res) => {
//                 expect(res.body).to.be.a('Object');
//                 expect(res.body).to.have.property('name');
//                 done();
//             });
//         });
//     });
//     describe('PUT /group/:id/:newName', () => {
//         const id = '6029185975140e35948ccbac';
//         const newName = 'tzevet 2';
//         it('should change group name', (done) => {
//             request(app).put(`/group/${id}/${newName}`).end((err, res) => {
//                 expect(res.body).to.be.a('Object');
//                 expect(res.body).to.have.property('name');
//                 expect(res.body.name).equal(newName);
//                 done();
//             });
//         });
//     });
//     describe('GET /group/hierarchy/:groupId', () => {
//         it('should get all groups in hierarchy', (done) => {
//             const id = '6028ff2bd0229341e85df4be';
//             request(app).get(`/group/hierarchy/${id}`).end((err, res) => {
//                 expect(res.body).to.be.a('string');
//                 done();
//             });
//         });
//     });
// });
