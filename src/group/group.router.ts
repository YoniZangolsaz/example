import express from 'express';
import * as groupController from '../group/group.controller';

const router = express.Router();

router.post('/', groupController.postGroup);
router.get('/', groupController.getGroup);
router.delete('/', groupController.deleteGroup);
router.put('/name/', groupController.putGroupName);
router.get('/hierarchy/', groupController.getHierarchy);
router.get('/searchPerson/', groupController.getIfPersonInGroup);
router.put('/group/', groupController.putGroupNewGroup);
router.delete('/group/', groupController.deleteContainingGroup);

export default router;