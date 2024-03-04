
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).send('Invalid username or password');
        }
        const token = jwt.sign({ username: user.username }, JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
};

const logoutUser = (req, res) => {
    res.clearCookie('jwt');
    res.status(200).send('Logged out successfully');
};

module.exports = { registerUser, loginUser, logoutUser };
