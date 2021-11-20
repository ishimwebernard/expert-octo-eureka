import { Router } from "express";
import Application from "./api/applications"
const router = Router();
router.use('/application', Application)
export default router;