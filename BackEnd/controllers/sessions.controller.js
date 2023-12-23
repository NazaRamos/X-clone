import { generateToken } from "../utils/jwt.js";

export const postLogin = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401, '/login').send({ mensaje: "Invalid credentials" })
        }
        

        let resuser = {
            _id: req.user._id,
            name: req.user.firstName,
            age: req.user.age,
            email: req.user.email,
            rol: req.user.rol,
            __v: req.user.__v

        }
        const token = generateToken(resuser)
        res.status(200).send({token})

    } catch (error) {
        res.status(500).send({ mensaje: `Error in sign in ${error}` })
    }
}

export const postRegister = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(400).send({ mensaje: "User already exist" })
        }

        res.redirect(301, '/login')

    } catch (error) {
        res.status(500).send({ mensaje: `Register error ${error}` })
    }
}

export const getGithub = async (req, res) => {
    req.session.user = req.user
    res.redirect(301, '/static')
}

export const getGithubCallback = async (req, res) => {
    req.session.user = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        age: req.user.age,
        email: req.user.email,
    }
    res.redirect(301, '/static')
}

export const getLogout = async (req, res) => {
    res.clearCookie('jwtCookie')
    res.status(200).send({mensaje: 'Loged out'})
}

export const getUser = async (req, res) => {
    if (req.session.user) {
        const user = req.session.user
        res.status(200).send(user)
    }
}

export const getCurrent = (req, res) => {
    res.send(req.user)
}