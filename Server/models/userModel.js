const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {type: String},
    username: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String, required: false },
    email: { type: String, required: true },
    password: {type: String, required: true},
    address: [String],
    createdAt: { type: Date, default: Date.now }
})

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;