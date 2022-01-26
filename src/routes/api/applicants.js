import {Router} from 'express'
import Applicants from '../../controllers/applicants'
const router = Router();

router.get('/forAdmission', Applicants.getWaitingForAdmission);
export default router;
