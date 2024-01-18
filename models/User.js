const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');
const crypto = require('crypto')


const userSchema = mongoose.Schema(
    {
        userId: {
            type: Number,
            unique: [true, 'Duplicate User ID'],
            required: [true, 'User ID is required'],
        },
        email: {
            type: String,
            validate: [validator.isEmail, "Please provide a valid email"],
            trim: true,
            lowercase: true,
            unique: [true, 'Duplicate Email'],
            required: [true, 'Email address is required'],
        },
        mobile: {
            type: String,
        },
        designation: {
            type: String,
            required: [true, 'Designation is required'],
            trim: true,
        },

        department: {
            type: String,
            required: [true, 'Department is required']
        },

        password: {
            type: String,
            default: 123456,
        },

        userRole: {
            type: String,
            enum: ['Super Admin', 'Admin'],
            default: 'Employee',
            required: true
        },

        firstName: {
            type: String,
            required: [true, 'First Name is required'],
            trim: true,
            minLength: [3, 'First Name must be at least 3 characters'],
            maxLength: [60, 'First Name length  is too large'],
        },
        lastName: {
            type: String,
            required: [true, 'Last Name is required'],
            trim: true,
            minLength: [3, 'Last Name must be at least 3 characters'],
            maxLength: [60, 'Last Name length  is too large'],
        },

        image: {
            type: String,
            validate: [validator.isURL, 'PLease provide a valid url'],
        },

        bio: {
            type: String
        },

        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetTokenExpires: Date
    },

    {
        timestamps: true,
    }
);

userSchema.pre('save', function (next) {
    const password = this.password;

    const hashedPassword = bcrypt.hashSync(password);

    this.password = hashedPassword;

    next();
})


userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordMatched = bcrypt.compareSync(password, hash);
    return isPasswordMatched;
}

userSchema.methods.generateResetPasswordToken = function () {

    const token = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = token;

    const date = new Date()
    const expiryDate = new Date(date.getTime() + 5 * 60000)
    this.passwordResetTokenExpires = expiryDate;

    return token;
}

const User = mongoose.model('User', userSchema);
module.exports = User;