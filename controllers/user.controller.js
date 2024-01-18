const { createUserService, getUserByEmailService, getAllUserService } = require("../services/user.service");

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