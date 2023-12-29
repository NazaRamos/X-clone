import { postsModel } from "../models/posts.models.js";

export const getPosts = async (req, res) =>{
    const { limit, page} = req.query

    try {
        let query = {}
        let link 

        let options = {
            limit: parseInt(limit) || 8,
            page: parseInt(page) || 1,
        }

        const posts = await postsModel.paginate(query, options)

        const response = {
            status: "success",
            payload: posts.docs,
            totalPages: posts.totalPages,
            prevPage: posts.prevPage,
            nextPage: posts.nextPage,
            page: posts.page,
            hasPrevPage: posts.hasPrevPage,
            hasNextPage: posts.hasNextPage,
            prevLink: posts.hasPrevPage ? `http://${req.headers.host}${req.baseUrl}?limit=${options.limit}&page=${posts.prevPage}${link || ''}` : null,
            nextLink: posts.hasNextPage ? `http://${req.headers.host}${req.baseUrl}?limit=${options.limit}&page=${posts.nextPage}${link || ''}` : null
        }
        res.status(200).send({ response: response })
    } catch (error) {
        res.status(400).send({ response: 'Error getting post', mensaje: error })
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params

    try {
        const post = await postsModel.findById(id)
        if (post) {
            res.status(200).send({ response: 'OK', mensaje: post })
        } else {
            res.status(404).send({ response: 'This post does not exist', mensaje: 'Not Found' })
        }
    } catch (error) {
        res.status(400).send({ response: 'Error getting post', mensaje: error })
    }
}

export const putPost = async (req, res) => {
    const { id } = req.params
    const { content } = req.body

    try {
        const post = await postsModel.findByIdAndUpdate(id, { content })
        if (post) {
            res.status(200).send({ response: 'OK', mensaje: 'Post updated' })
        } else {
            res.status(404).send({ response: 'Post does not exist', mensaje: 'Not Found' })
        }
    } catch (error) {
        res.status(400).send({ response: 'Error updating post', mensaje: error })
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params

    try {
        const post = await postsModel.findByIdAndDelete(id)
        if (post) {
            res.status(200).send({ response: 'OK', mensaje: 'Post deleted' })
        } else {
            res.status(404).send({ response: 'Post does not exist', mensaje: 'Not Found' })
        }
    } catch (error) {
        res.status(400).send({ response: 'Eror deleting post', mensaje: error })
    }
}

export const postPost = async (req, res) => {
    const { content } = req.body
    try {
        const post = await postsModel.create({ content })
        res.status(200).send(post)

    } catch (error) {
        res.status(400).send({ response: 'Error creating post', mensaje: error })
    }
}


export const putLike = async (req, res) => {
    const { id } = req.params
    const { likes } = req.body

    try {
        const post = await postsModel.findByIdAndUpdate(id, { likes })
        if (post) {
            res.status(200).send({ response: 'OK', mensaje: 'Like updated' })
        } else {
            res.status(404).send({ response: 'Post does not exist', mensaje: 'Not Found' })
        }
    } catch (error) {
        res.status(400).send({ response: 'Error updating post', mensaje: error })
    }
}