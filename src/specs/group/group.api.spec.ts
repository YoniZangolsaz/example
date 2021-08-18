import { expect } from 'chai';
import { Request } from 'supertest';
import { startFunction } from '../../utils/index';
import { app } from '../..//utils/server';

// startFunction();

describe("test group API", function() {
    describe("POST /group/", function() {
        it("should create a new group in db", function() {

        });
    });

    describe("GET /group/", function() {
        it("should return the info of the group from db", function() {

        });
    });

    describe("DELETE /group/", function() {
        it("should delete group from db", function() {

        });
    });

    describe("PUT /group/name/", function() {
        it("should chang the group name in the db", function() {

        });
    });

    describe("GET /group/hierarchy/", function() {
         it("should rerutn the hierarchy of the group", function() {

        });
    });
    
    describe("GET /group/searchPerson/", function() {
        it("should return true/false - if the person in the group", function() {

        }); 
    });

    describe("PUT /group/group/", function() {
        it("should add to the group new containing group", function() {

        }); 
    });

    describe("DELETE /group/group/", function() {
        it("should delete the group from the containing groups of the group", function() {

        }); 
    });
});