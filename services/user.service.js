const User = require('../models/User');

exports.createUserService = async (userData) => {

    const user = await User.create(userData);

    return user;
}

exports.getUserByIdService = async (userId) => {
    const user = await User.findById(userId);
    // console.log(user);
    return user;
}