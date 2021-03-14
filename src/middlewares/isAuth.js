var jwt  =  require('jsonwebtoken');
const User = require('../models/user');

var isAuth = async (req, res,  next) => {
    
    try {
        var token = req.headers.authorization;
    
        var userData = await jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    
        var user = await User.findOne({  _id: userData._id });

        if (!user) {
            return res.json({
                error: 'User khong ton tai'
            })
        }

        req.user = user;
        return next();
    }  catch(e) {
        res.json({
            error: e
        })
    }

    //next();

    var user = await User.findOneAndUpdate({_id: ''}, { name: 'Khoi' },{ name: 'phi', })

};

module.exports = isAuth;