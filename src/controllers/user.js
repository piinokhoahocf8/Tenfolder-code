var User = require("../models/user")
var md5 = require('md5');
var Response = require("../helpers/response")

module.exports.getMe = async (req, res,next) => {
    try {
        var user = await User.findOne({ _id: req.user._id})

        Response.success({
            res,
            data:{
                user: user
            }         
        })
    } catch (e) {
        next(e)
    }
}

module.exports.changeInformation = async (req, res,next) => {
    try {
        var name = req.body.name;
        var dayOfBirth = req.body.dayOfBirth;
        var address = req.body.address;
        var gender = req.body.gender;

        var user = await User.findOneAndUpdate({ _id: req.user._id}, { name: name, dayOfBirth: dayOfBirth, address: address, gender: gender }, { new: true })

        Response.success({
            res,
            data:{
                user: user
            }         
        })
    } catch (e) {
       next(e)
    }
}

module.exports.changePassword = async (req, res,next) => {
    try {
        var oldPassword = req.body.oldPassword;  
        var password =  req.body.password; 

        var hashOldPassword = md5(oldPassword)
        var user = await User.findOne({ password: hashOldPassword });

        if (!user) {
            return Response.error({
                res,
                message: 'Mật khẩu hiện tại không đúng'
            })
        }

        var hashPassword = md5(password);

        await User.findOneAndUpdate({ _id: req.user._id }, { password: hashPassword })

        Response.success({
            res,
            data: {
                message: 'Đổi mật khẩu thành công'
            }
        })
      
   } catch (e) {
       console.error(e)
      next(e)
    }
}

module.exports.getProfile = async (req, res,next) => {
    try {
        var user = await User.findOne({ _id: req.user._id})
        console.log(user)

        return Response.success({
            res,
            data:{
                user: user
            }         
        })
    } catch (e) {
        next(e)
    }
}


