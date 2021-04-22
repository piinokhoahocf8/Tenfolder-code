var jwt = require('jsonwebtoken');
var User = require('../models/user')
var Response = require('../helpers/response')
var md5 = require('md5');
var randomstring = require("randomstring");
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports.register = async function (req, res, next) {
    try {
        var email = req.body.email; // email nhap len
        var password = req.body.password;
        var name = req.body.name;

        var existedUser = await User.findOne({ email: email });

        if (existedUser) {
            return Response.error({
                res,
                message: 'Email đã tồn tại trong hệ thống'
            })
        }

        var hashPassword = md5(password);

        var user  =  await User.create({
            email: email,
            password: hashPassword,
            name: name
        })

        Response.success({
            res,
            code: 201,
            data: {
                user: user
            }
        })
    } catch (e) {
        next(e)
    }
    
}

module.exports.login = async function (req, res, next) {
    try {
        var email = req.body.email;
        var password = req.body.password;

        var user = await User.findOne({ email: email });

        if (!user) {
            return Response.error({
                res: res,
                message: 'Email không tồn tại'
            })
        }
        var hashPassword = md5(password);

        if (user.password !== hashPassword){
            return Response.error({
                res,
                message: 'Mật khẩu không đúng'
            })
        }
           
        var token = jwt.sign({ _id: user._id, name: user.name }, process.env.JWT_PRIVATE_KEY);

        Response.success({
            res,
            data: {
                token: token,
                user: {
                    email: user.email,
                    name: user.name,
                    _id: user._id
                }
            }
        })
    } catch(e) {
        next(e)
    }
}

module.exports.forgotPassword = async (req, res, next) => {
    try {
        var email = req.body.email; 

        var user = await User.findOne({ email: email });

        if (!user) {
            return Response.error({
                res,
                message: 'Email không tồn tại trong hệ thống'
            })
        }

        const newPassword = randomstring.generate(6);
        const hashPassword =  md5(newPassword);

        await User.findOneAndUpdate({ email: email }, { password: hashPassword })

        var msg = {
            to: email, 
            from: 'phima2001@gmail.com', 
            subject: 'Lấy lại mật khẩu',
            text: `Mật khẩu mới của bạn là ${newPassword}`,
        }

        console.log(msg);
        await sgMail.send(msg)

        Response.success({
            res,
            data: {
                message: 'Chúng tôi đã gửi mật khẩu mới về email của bạn',
            }
            
        })
    } catch (e) {
        console.error(e)
        next(e)
    }
}

