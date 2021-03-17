var User = require("../models/user")
var md5 = require('md5');

module.exports.getMe = async (req, res,next) => {
    try {
        var user = await User.findOne({ _id: req.user._id})

        res.json({
            user: user
        })
    } catch (e) {
        console.log('getUser', e)
    }
}

module.exports.changeInformation = async (req, res,next) => {
    try {
        var name = req.body.name;
        var dayOfBirth = req.body.dayOfBirth;
        var address = req.body.address;
        var gender = req.body.gender;


        var user = await User.findOneAndUpdate({ _id: req.user._id}, { name: name, dayOfBirth: dayOfBirth, address: address, gender: gender }, { new: true })

        res.json({
            user: user
        })
    } catch (e) {
        console.log('change informarion', e)
    }
}

module.exports.changePassword = async (req, res,next) => {
    try {
        var oldPassword = req.body.oldPassword;  
        var password =  req.body.password; 

        var hashOldPassword = md5(oldPassword)
        var user = await User.findOne({ password: hashOldPassword });

        if (!user) {
            return res.json({
                error: 'Mat khau hien tai khong dung'
            })
        }

        var hashPassword = md5(password);

        await User.findOneAndUpdate({ _id: user._id }, { password: hashPassword })

        res.json({
            message: 'Doi mat khau thanh cong'
        })
      
   } catch (e) {
       console.log('forgot password', e)
}
}

