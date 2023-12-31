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
    nickname: {
        type: String,
        required: true,
        unique: true
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
    role: {
        type: String,
        default: 'user',
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }],
},{timestamps: true})

userSchema.pre('findOne', function () {
    this.populate('posts');
});


export const userModel = model('users', userSchema)