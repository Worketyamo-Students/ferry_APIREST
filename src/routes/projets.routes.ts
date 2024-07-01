import { Router } from 'express';

import projetController from '../controllers/projets.controllers';

const router = Router();

router.get('/projets', projetController.getAllProjet);
router.get('/projets/:id', projetController.getOneProjet);
router.post('/projets', projetController.createProjet);
router.put('/projets/:id', projetController.updateProjet);
router.delete('/projets/:id', projetController.deleteProjet);


export default router;