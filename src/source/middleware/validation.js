
const { z } = require('zod');

const postSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    author: z.string().min(1),
});

const validatePost = (req, res, next) => {
    try {
        postSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).send('Validation error: ' + error.message);
    }
};

module.exports = { validatePost };
