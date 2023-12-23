import { Router } from "express";
import passport from "passport";

import { postLogin, postRegister, getLogout, getUser } from "../controllers/sessions.controller.js";


const sessionRouter = Router()

sessionRouter.post('/login', passport.authenticate('login'), postLogin)
sessionRouter.post('/register', passport.authenticate('register'), postRegister)
sessionRouter.get('/logout', getLogout)
sessionRouter.get('/user', getUser)

export default sessionRouter