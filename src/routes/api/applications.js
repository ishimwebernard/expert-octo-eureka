import {Router} from 'express'
import applicationValidator from '../../validators/applicationValidator'
import applicationController from '../../controllers/application'
const router = Router();
router.post('/', applicationValidator.validateApplication, applicationController.sendApplication)
export default router;