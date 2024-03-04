
const Post = require('../models/post');

const createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const post = new Post({ title, content, author });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating post');
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching posts');
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching post');
    }
};

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.postId, req.body, { new: true });
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating post');
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.postId);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.status(200).send('Post deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting post');
    }
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
