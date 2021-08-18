import express from 'express';
import * as personController from '../person/person.controller';

const router = express.Router();

router.post('/', personController.postPerson);
router.get('/', personController.getPerson);
router.delete('/', personController.deletePerson);
router.put('/name/', personController.putPersonName);
router.put('/group/', personController.putPersonGroup);
router.delete('/group/', personController.deletePersonGroup);
router.get('/getALlPersonGroup/', personController.getAllPersonGroup);

export default router;