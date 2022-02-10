import { Router } from 'express'
import Users from '../../controllers/users'
const router = Router();
router.post('/signin', Users.login)
router.post('/signout', Users.logout)

export default router;