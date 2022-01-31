import {Router} from 'express'
import applicationController from '../../controllers/schedules'

const router = Router()

router.get("/all", applicationController.getAllSchedules)
router.post("/addParticipants", applicationController.addParticipants)
router.post("/new", applicationController.createNewSchedule)

export default router;