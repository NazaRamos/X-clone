import { Schema, model } from "mongoose";

const postSchema = Schema({
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    responses: [{
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }],
    datetime: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

postSchema.pre('findOne', function () {
    this.populate('responses');
});

export const postModel = model('posts', postSchema);