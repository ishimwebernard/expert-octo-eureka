import {Router} from 'express'
import applicationValidator from '../../validators/applicationValidator'
import applicationController from '../../controllers/application'
const router = Router();
router.post('/sendapplication', applicationValidator.validateApplication, applicationController.sendApplication)
router.post('/admitapplicant', applicationController.admitApplicant)
router.post('/rejectapplicant', applicationController.rejectApplicant)

export default router;