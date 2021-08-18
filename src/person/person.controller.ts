import express, { Request, Response } from 'express';
import personInterface from './person.interface';
import * as personManager from './person.manager';

const app = express();

// POST http://localhost:8000/person/:personName
export const postPerson = async (req: Request, res: Response) => {  
    const personNameQuery: string = req.query.personName!.toString();
    const personGroupsQuery: string[] = [];

    const dacument: personInterface = {
        personName: personNameQuery,
        personGroups: personGroupsQuery
    };

    const answer: string = await personManager.addPerson(dacument);
    res.send(answer);
};

// GET http://localhost:8000/person/:id
export const getPerson = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();

    const answer: string = await personManager.getPerson(id);
    res.send(answer);
};

// DELETE http://localhost:8000/person/:id
export const deletePerson = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();
    
    const answer: string = await personManager.deletePerson(id);
    res.send(answer);
};

// PUT http://localhost:8000/person/name/:id:personName
export const putPersonName = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();
    const personNameQuery: string = req.query.personName!.toString();

    const answer: string = await personManager.updatePersonName(id, personNameQuery);
    res.send(answer);
};

// PUT http://localhost:8000/person/group/:id:personGroups
export const putPersonGroup = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();
    const personGroupQuery: string = req.query.personGroups!.toString();

    const answer: string = await personManager.updatePersonGroup(id, personGroupQuery);
    res.send(answer);
};

// DELETE http://localhost:8000/person/group/:id:personGroup
export const deletePersonGroup = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();
    const personGroupQuery: string = req.query.personGroup!.toString();

    const answer: string = await personManager.deletePersonGroup(id, personGroupQuery);
    res.send(answer);
};

// GET http://localhost:8000/person/getALlPersonGroup/:id
export const getAllPersonGroup = async (req: Request, res: Response) => {
    const id: string = req.query.id!.toString();

    const answer: string = await personManager.personGroup(id);
    res.send(answer);
};