import { Router } from "express";
import Application from "./api/applications"
const router = Router();
router.use('/', (req, res)=>{
    res.status(200).send({body: "Welcome to PRIMECS"})
})
router.use('/application', Application)
export default router;