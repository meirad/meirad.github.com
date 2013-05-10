
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home | Stream' });
};

exports.about = function(req, res){
	res.render('about', { title: 'About'});
};
exports.letter = function(req, res){
	res.render('letter', { title: 'Letter'});
};