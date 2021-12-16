import { Router } from "express";
import Application from "./api/applications"
const router = Router();

router.use('/application', Application)
router.use('/', (req, res)=>{
    res.status(200).send({body: "Welcome to PRIMECS"})
})
export default router;