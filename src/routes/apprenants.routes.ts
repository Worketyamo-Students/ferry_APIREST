import { Router } from 'express';

import apprenantsController from '../controllers/apprenant.controller';

const router = Router();

router.get('/apprenants', apprenantsController.getAllapprenants);
router.get('/apprenants/:id', apprenantsController.getOneApprenant);
// router.post('/apprenants', apprenantsController.createApprenant);
// router.put('/apprenants/:id', apprenantsController.updateApprenant);
router.delete('/apprenants/:id', apprenantsController.deleteApprenant);

export default router