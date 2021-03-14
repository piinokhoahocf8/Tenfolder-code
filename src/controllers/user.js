const User = require("../models/user")

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
        
        var user = await User.findOneAndUpdate({ _id: req.user._id}, { name: name })

        res.json({
            user: user
        })
    } catch (e) {
        console.log('getUser', e)
    }
}

module.exports.changePassword = async (req, res,next) => {
    try {
        var oldpassword = req.body.oldpassword; 

        var user = await User.findOne({ password: oldpassword });

        if (!user) {
            return res.json({
                error: 'mat khau hien tai khong dung '
            })
        }
        const newPassword = randomstring.generate(6);
        const hashPassword =  md5(newPassword);

        await User.findOneAndUpdate({ email: email }, { password: hashPassword })

        var newpassword = req.body.newPassword
      
   } catch (e) {
       console.log('getUser', e)
}
}


//Định ra function trong controller
//changePassword
//oldPassword
//newPassword
//oldPassword có khớp với mk hiện tại hay không
//không khớp => báo lỗi mật khẩu hiện tại ko đúng
//khớp => đổi lại mk = newPassword