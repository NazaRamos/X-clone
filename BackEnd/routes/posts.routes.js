import { Router } from "express";

import { getPosts, getPost, putPost, deletePost, postPost } from "../controllers/posts.controller.js";


const postsRouter = Router()

postsRouter.get('/', getPosts)
postsRouter.get('/:id', getPost)
postsRouter.put('/:id', putPost)
postsRouter.delete('/:id', deletePost)
postsRouter.post('/', postPost)

export default postsRouter