const mongoose = require('mongoose');
const users = require('./../models/userModel');

exports.register = async (req, res) => {
    try {
        const user = await new users.create({ ...req.body })
        res.status(200).json({ status: true, user: user, message: "Create user account successfully" });
    } catch (error) {
        res.status(500).json({ status: false, user: null, message: "Create user account unsuccessfully" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kiểm tra xem email và password có được cung cấp hay không
        if (!email || !password) {
            throw new Error("Need to fill all the input")
        }

        // Tìm người dùng trong cơ sở dữ liệu bằng email
        const user = await users.findOne({ email });
        if (!user) {
            throw new Error("Sorry, your accoount cant be found.")
        }

        if (user.password != password) {
            throw new Error("Wrong password")
        } else {
            return res.status(200).json({ status: true, message: `Welcome back, ${user.name}. How has you been ?`, user: user })
        }

    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { _id, email, password, name } = req.body;

        // Kiểm tra xem _id, email, password, name có được cung cấp hay không
        if (!_id || !email || !password || !name) {
            throw new Error("Need to fill all the input")
        }

        // Kiểm tra xem có tài khỏan để cập nhật hay không
        const updatedUser = await users.findByIdAndUpdate(_id, { email, password, name }, { new: true });
        if (!updatedUser) {
            throw new Error("Sorry there might has been some issue, please try again after a few minutes")
        }

        // Thông báo cập nhật thành công
        const user = await users.findById(_id);
        return res.status(200).json({ status: true, message: "Update your profile successfully", user: user })
    } catch (error) {
        res.status(500).json({ status: true, message: error.message })
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { _id } = req.body;
        const user = await users.findByIdAndDelete(_id);

        if (!user) {
            throw new Error("Sorry there maybe some issue here, please try again later.")
        }

        return res.status(200).json({ status: true, message: "Your account has been removed completely" });
    } catch (error) {
        res.status(200).json({ status: true, message: error.message });
    }
};

exports.createUserAddress = async (req, res) => {
    try {
        const { _id, userAddress } = req.body;

        //Kiểm tra thêm địa chỉ có thành công hay không ?
        const add = await users.updateOne({ _id }, { $push: { userAddress } });
        if (!add) {
            throw new Error("Sorry there maybe some issue here, please try again later.");
        }

        return res.status(200).json({ status: true, message: "Congrat, your new location has been add into your account" });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

exports.updateUserAddress = async (req, res) => {
    try {
        const { oldAddress, newAddress, _id } = req.body
        const address = await users.findOneAndUpdate({ _id, address: oldAddress },
            { $set: { 'address.$': newAddress } }, { new: true, useFindAndModify: false });

        if (!address) {
            throw new Error("Sorry, we can't update your address yet.");
        }

        return res.status(200).json({status: true, message: "Your address has been updated"});

    } catch (error) {
        res.status(500).json({status: false, message: error.message});
    }
}

exports.deleteUserAddress = async (req, res) => {
    try {
        const { _id, address } = req.body;
        const addr = await users.findByIdAndDelete(_id, address);

        if (!addr) {
            throw new Error("Sorry there maybe some issue here, please try again later.")
        }

        return res.status(200).json({ status: true, message: "Your address has been removed completely" });
    } catch (error) {
        res.status(200).json({ status: true, message: error.message });
    }
}