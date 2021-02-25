// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var auth = require( '../Auth/Auth.controllers') 
const url = 'mongodb://localhost:27017';

const dbName = 'food-app';


router.get('/', function(req, res, next) {
console.log("heeh")
  MongoClient.connect(url, function(err, client) {
    if(err)
        console.log(err);

    const db = client.db(dbName);

    const collection_user = db.collection('User');

    collection_user.find({

    }).toArray(function(err, user) {
        if(err)
            console.log(err);

        //console.log(ds_movie);

        res.json({
            'xu_ly': 'Toan bo danh sach User',
             'data_send': user,
             "err":false
            });
        
        client.close();
    });
  });

  // res.json({
  //   "data": "danh sach user" + JSON.stringify(req.query)
  // });

  //res.send('respond with a resource' + a);
});


router.post('/', function(req, res, next) {
  console.log("heeh")
    MongoClient.connect(url, function(err, client) {
      if(err)
          console.log(err);
  
      const db = client.db(dbName);
  
      const collection_user = db.collection('User');
  
      collection_user.insertOne(req.body, () => {
        res.json({
            'xu_ly': 'đăng ký user mới',
            data_send: req.body
        });
          
          client.close();
      });
    });
  
   
  });
  



module.exports = router;