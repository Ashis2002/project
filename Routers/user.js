import { Router } from "express";
import { userModel } from "../Models/user.js";
import { userRegister,userLogin, getMyProfile, userLogout} from "../Controllers/user.js";
import { isAuthoriser } from "../Middlewares/auth.js";
const router = Router();

router.post('/new', userRegister);
router.post('/login', userLogin);
router.get('/me',isAuthoriser, getMyProfile);
router.get('/logout',isAuthoriser, userLogout)

export default router;