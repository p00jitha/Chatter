import express from 'express'
import {signup,login,logout,forgotpw} from '../controllers/auth_controllers.js'
const router = express.Router()

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.post("/forgotpw",forgotpw);

export default router;