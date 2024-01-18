const { createUserService } = require("../services/user.service");

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