import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import MongoStore from 'connect-mongo'

import passport from 'passport'
import initializePassport from './config/passport.js'
import session from 'express-session'

import 'dotenv/config.js';
import './config/database.js';
import {__dirname, __filename} from './utils/utils.js';

import userRouter from './routes/users.routes.js';
import sessionRouter from './routes/sessions.routes.js';
import postsRouter from './routes/posts.routes.js';


const whiteList = ['http://localhost:5173']
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) != 1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Acceso denegado"));
        }
    },
    credentials: true
};


const app = express();

app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SIGNED_COOKIE));
app.use(express.static(path.join(__dirname, 'public')));

//Passport

app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.DB,
        ttl: 500
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false

}))

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

//Routes

app.use('/api/users', userRouter);
app.use('/api/sessions', sessionRouter)
app.use('/api/posts', postsRouter)

export default app;
