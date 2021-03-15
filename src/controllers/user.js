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
        
        var user = await User.findOneAndUpdate({ _id: req.user._id}, { name: name }, { new: true })

        res.json({
            user: user
        })
    } catch (e) {
        console.log('change informarion', e)
    }
}

module.exports.changePassword = async (req, res,next) => {
    try {
        var oldPassword = req.body.oldPassword;  // mk cu 123123 === 4297f44b13955235245b2497399d7a93
        var password =  req.body.password; // mk moi 123abc

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


//Định ra function trong controller
//changePassword
//oldPassword
//newPassword
//oldPassword có khớp với mk hiện tại hay không
//không khớp => báo lỗi mật khẩu hiện tại ko đúng
//khớp => đổi lại mk = newPassword