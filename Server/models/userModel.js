const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone: { type: String, required: false },
    name: { type: String, required: false },
    avatar: { type: String, required: false },
    email: { type: String, required: true},
    password: {type: String, required: true},
    address: [String],
    createdAt: { type: Date, default: Date.now }
})

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;