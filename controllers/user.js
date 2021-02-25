module.exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

module.exports.notification = function(req, res, next) {
    res.render('notifications', { title: 'thong bao' });
  };

module.exports.review = function(req, res, next) {
    res.render('review', { title: 'gioithieu' });
  };

module.exports.post = function(req, res, next) {
    res.render('post', { title: 'status' });
  };

module.exports.cities = function(req, res, next) {
    res.render('cities', { title: 'place' });
  };

module.exports.categories = function(req, res, next) {
    res.render('categories', { title: 'name' });
  };