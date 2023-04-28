const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { USER_DB } = require('../config/dbConnect');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requires: true,
    },
    email: {
        type: String,
        requires: true,

    },
    password: {
        type: String,
        requires: true,
    }
});


//Hash password before saving it to DB

userSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
            next();
        }
        else {
            next();
        }
    } catch (error) {
        return next(error);
    }
});


const Users = USER_DB.model('Users', userSchema);

module.exports = Users;