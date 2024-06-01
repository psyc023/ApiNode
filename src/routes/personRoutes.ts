import { Router } from 'express';
import { getAllPersons, getPersonById, createPerson, updatePerson, deletePerson } from '../controllers/personController';

const router = Router();

router.get('/persons', getAllPersons);
router.get('/persons/:id', getPersonById);
router.post('/persons', createPerson);
router.put('/persons/:id', updatePerson);
router.delete('/persons/:id', deletePerson);

export default router;