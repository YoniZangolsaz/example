import { expect } from 'chai';
// import { startFunction } from '../../utils/index';
import * as groupManager from '../../group/group.manager';
import groupInterface from '../../group/group.interface';

// startFunction();

let result: any = '';

describe("test CRUD function", function() {
    describe("create group", function() {
        const dacument: groupInterface = {
            groupName: "group",
            personInGroup: [],
            containingGroup: [],
            father: '0'
        };

        beforeEach(async () => { 
            result = await groupManager.addGroup(dacument);
        });
        
        it("it should create a new group in db", (done) => {
            expect(result).to.be.a('string');
            expect(result).to.equal('added new group successfully');
            done();
        });
    });

    describe("get group info", function() {
        it("should return the group info from the db", function() {

        });
    });

    describe("", function() {
        it("delete group", function() {

        });
    });

    describe("", function() {
        it("update group name", function() {

        });
    });

    describe("", function() {
        it("hierarchy", function() {

        });
    });

    describe("", function() {
        it("get if person in group", function() {

        });
    });

    describe("", function() {
        it("update containing group", function() {

        });
    });

    describe("", function() {
        it("delete containing group", function() {

        });
    });

    describe("", function() {
        it("update father of group", function() {

        });
    });

    describe("", function() {
        it("delete father of group", function() {

        });
    });

    describe("", function() {
        it("get containing group of a group", function() {

        });
    });

    describe("", function() {
        it("get persons in a group", function() {

        });
    });

    describe("", function() {
        it("get persons name in a group", function() {

        });
    });

    describe("", function() {
        it("update person in a group", function() {

        });
    });
    
    describe("", function() {
        it("delete person in a group", function() {

        });
    }); 
});