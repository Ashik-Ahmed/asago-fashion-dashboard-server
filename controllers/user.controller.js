const { createUserService, getUserByEmailService, getAllUserService } = require("../services/user.service");
const { generateToken } = require("../utils/generateToken");

exports.createUser = async (req, res) => {
    try {
        const userData = req.body;

        const isUserCreated = await createUserService(userData);

        if (isUserCreated) {
            res.status(201).json({
                status: 'Success',
                data: isUserCreated
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'User not created'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await getUserByEmailService(email)

        if (user) {
            res.status(200).json({
                status: 'Success',
                data: user
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'User not found'
            })
        }
    }
    catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await getAllUserService();

        if (users) {
            res.status(200).json({
                status: 'Success',
                data: users
            })
        }
        else {
            res.status(400).json({
                status: 'Failed',
                error: 'No user found'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            error: error.message
        })
    }
}


exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({
                status: 'fail',
                error: 'please provide email and password'
            })
        }

        const user = await getUserByEmailService(email);
        // console.log(user);
        if (!user) {
            return res.status(401).json({
                status: 'fail',
                error: 'No user found'
            })
        }

        const isPasswordMatched = user.comparePassword(password, user.password);

        if (!isPasswordMatched) {
            return res.status(403).json({
                status: 'fail',
                error: 'Password is not correct'
            })
        }

        const token = generateToken(user);
        const { password: pwd, ...others } = user.toObject();

        res.status(200).json({
            status: 'success',
            message: 'Successfully logged in',
            data: {
                user: others,
                token
            }
        })

    } catch (error) {
        res.status(500).json({
            status: 'failed',
            error: error.message,
        })
    }
}

// get logged in user 
exports.getLoggedInUser = async (req, res) => {
    try {

        const user = await getUserByEmailService(req.user?.email);
        const { password, ...others } = user.toObject();

        res.status(200).json({
            status: 'success',
            user: others
        })
    } catch (error) {
        res.status(403).json({
            status: 'failed',
            error: 'Invalid Token',
        })
    }
}