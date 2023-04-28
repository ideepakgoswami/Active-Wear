const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if user already exists with the given email
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(422).json({ error: "Email already exists" });
        }
        // Create new user with hashed password
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully. Kindly SignIn to Continue" });
    }
    catch (error) {
        console.log(error);
    }
}


exports.signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            if (isMatch) {
                // const token = await jwt.sign({ _id: userLogin._id }, secret);
                res.status(201).json({ message: "Signed In successful" });
            } else {
                return res.status(422).json({ error: "Invalid Credentials" });
            }
        }
        else {
            return res.status(422).json({ error: "Email not registered" });
        }
    }
    catch (error) {
        console.log(error);
    }
}