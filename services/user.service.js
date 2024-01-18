const User = require('../models/User');

exports.createUserService = async (userData) => {

    const user = await User.create(userData);

    return user;
}