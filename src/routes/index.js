import { Router } from "express";
import Application from "./api/applications"
import Applicants from './api/applicants'
import Schedules from './api/schedules'
import Users from './api/users'

const router = Router();
router.use('/applicants', Applicants)
router.use('/application', Application)
router.use('/schedules', Schedules)
router.use('/users', Users)
router.use('/', (req, res)=>{
    res.status(200).send({body: "Welcome to PRIMECS"})
})
export default router;