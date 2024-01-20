const User = require('../models/User');

exports.createUserService = async (userData) => {

    const user = await User.create(userData);

    return user;
}

exports.getUserByEmailService = async (userEmail) => {
    const user = await User.findOne({ email: userEmail });
    // console.log(user);
    return user;
}

exports.getAllUserService = async () => {
    const users = await User.find();
    return users;
}

exports.deleteUserByEmailService = async (userEmail) => {
    const result = await User.deleteOne({ email: userEmail });

    return result;
}