import express from 'express';
import { Application } from 'express';

import personRouter from '../person/person.router';
import groupRouter from '../group/group.router';

const router = express.Router();

function routers(app: Application) {
    app.use('/person', personRouter);
    app.use('/group', groupRouter);
}

export default routers;