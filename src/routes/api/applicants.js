import {Router} from 'express'
import Applicants from '../../controllers/applicants'
const router = Router();

router.get('/forAdmission', Applicants.getWaitingForAdmission);
router.get('/active', Applicants.getActiveUsers);
export default router;
