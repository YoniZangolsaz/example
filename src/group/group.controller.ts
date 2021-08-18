import express, { Request, Response } from 'express';
import groupInterface from './group.interface';
import * as groupManager from './group.manager';

const app = express();

// POST http://localhost:8000/group/
export const postGroup = async (req: Request, res: Response) => {
    const groupNameQuery: string = req.query.groupName!.toString();
    const personInGroupQuery: string[] = [];
    const containingGroupQuery: string[] = [];
    const fatherQuery: string = "0";

    const dacument: groupInterface = {
        groupName: groupNameQuery,
        personInGroup: personInGroupQuery,
        containingGroup: containingGroupQuery,
        father: fatherQuery
    };

    const answer: string = await groupManager.addGroup(dacument);
    res.send(answer);
};

// GET http://localhost:8000/group/:id
export const getGroup = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();

    const answer: string = await groupManager.getGroup(id);
    res.send(answer);
};

// DELETE http://localhost:8000/group/:id
export const deleteGroup = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();

    const answer: string = await groupManager.deleteGroup(id);
    res.send(answer);
};

// PUT http://localhost:8000/group/name/:id:groupName
export const putGroupName = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();
    const groupNameQuery: string = req.query.groupName!.toString();

    const answer: string = await groupManager.updateGroupName(id, groupNameQuery);
    res.send(answer);
};

// GET http://localhost:8000/group/hierarchy/:id
export const getHierarchy = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();

    const answer: string = await groupManager.hierarchy(id);
    res.send(answer);
};

// GET http://localhost:8000/group/searchPerson/:personName:groupName
export const getIfPersonInGroup = async (req: Request, res: Response) => {
    const personNameQuery: string = req.query.personName!.toString();
    const groupNameQuery: string = req.query.groupName!.toString();

    const answer: string = await groupManager.getIfPersonInGroup(personNameQuery, groupNameQuery);
    res.send(answer);
};

// PUT http://localhost:8000/group/group/:id:containingGroup
export const putGroupNewGroup = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();
    const containingGroupQuery: string = req.query.containingGroup!.toString();

    const answer: string = await groupManager.updateContainingGroup(id, containingGroupQuery);
    res.send(answer);
};

// DELETE http://localhost:8000/group/group/:id:containingGroup
export const deleteContainingGroup = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();
    const containingGroupQuery: string = req.query.containingGroup!.toString();

    const answer: string = await groupManager.deleteContainingGroup(id, containingGroupQuery);
    res.send(answer);
};