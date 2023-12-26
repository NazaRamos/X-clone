import 'dotenv/config'
import local from 'passport-local'
import passport from 'passport'
import jwt from 'passport-jwt'
import { createHash, validatePassword } from '../utils/bcrypt.js'
import { userModel } from '../models/users.models.js'


const LocalStraregy = local.Strategy
const JWTStrategy = jwt.Strategy
const ExtractJWT = jwt.ExtractJwt

const initializePassport = () => {

    const cookieExtractor = req =>{
        const token = req.headers.authorization ? req.headers.authorization : {}
        console.log('extraction', token)
        return token
    }

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: process.env.JWT_SECRET
    }, async(jwt_payload, done)=>{
        try {
            return done (null, jwt_payload)
        } catch (error) {
            return done(error)
        }
    }))

    passport.use('register', new LocalStraregy({ passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) => {
        const { name, email, age } = req.body
        try {
            const user = await userModel.findOne({ email: email })

            if (user) return done(null, false)

            const passwordHash = createHash(password)
            const userCreated = await userModel.create({ name: name, email: email, age: age, password: passwordHash })

            return done(null, userCreated)
        }
        catch (error) {
            return done(error)
        }
    }
    ))

    passport.use('login', new LocalStraregy({  usernameField: 'email' }, async (username, password, done) => {
        try {
            const user = await userModel.findOne({ email: username })
                
            if (!user) return done(null, false)

            if (validatePassword(password, user.password)) {

                return done(null, user)
            }

            return done(null, false)

        }
        catch (error) {
            return done(error)
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id)
        done(null, user)
    })
}

export default initializePassport