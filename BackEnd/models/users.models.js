import { Schema, model } from "mongoose"

const userSchema = Schema ({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        default: 'user'
    }
},{timestamps: true})

export const userModel = model('users', userSchema)