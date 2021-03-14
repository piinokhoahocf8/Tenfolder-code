var jwt = require('jsonwebtoken');
var User = require('../models/user')
var md5 = require('md5');
var randomstring = require("randomstring");
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports.register = async function (req, res, next) {
    try {
        var email = req.body.email; // email nhap len
        var password = req.body.password;
        var name = req.body.name;
        var age = req.body.age;


        var existedUser = await User.findOne({ email: email });

        // neu user da ton tai => tra ve loi
        if (existedUser) {
            return res.json(
                {
                    error: 'Email da ton tai trong he thong'
                }
            )
        }

        var hashPassword = md5(password);

        // neu khong ton tai => tao tai khoan
        var user  =  await User.create({
            email: email,
            password: hashPassword,
            name: name,
            age: age
        })

        res.json({
        user: user
        })
    } catch (e) {
        console.log('register', e)
    }
    
}

module.exports.login = async function (req, res, next) {
    try {
        var email = req.body.email;
        var password = req.body.password;

        var user = await User.findOne({ email: email });

        if (!user) {
            return res.json({
                error: 'Email khong ton tai trong he thong'
            })
        }

        var hashPassword = md5(password);

        if (user.password !== hashPassword){
            return res.json({
                error: 'mat khau khong dung'
            })
        }
           
        var token = jwt.sign({ _id: user._id, name: user.name }, process.env.JWT_PRIVATE_KEY);

        res.json({
            token: token,
            user: {

                email: user.email,
                name: user.name,
                _id: user._id
                
            }
        })
    } catch(e) {
        console.log('login', e)
    }
}

module.exports.forgotPassword = async (req, res, next) => {
    try {
        var email = req.body.email; 

        var user = await User.findOne({ email: email });

        if (!user) {
            return res.json({
                error: 'Email khong ton tai trong he thong'
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

        await sgMail.send(msg)
        

        res.json({
            message: 'Chúng tôi đã gửi mật khẩu mới về email của bạn',
        
        })
    } catch (e) {
        console.error('login', e)
    }
}

