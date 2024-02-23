import express from 'express'
import protectRoute from '../middleware/protectRoute.js';
import userSidebar from '../controllers/user_controller.js'
const router = express.Router()

router.get('/',protectRoute,userSidebar)

export default router;