/**
 * Created by Ralph on 10/11/2016.
 */
/* GET home page */
module.exports.index = function(req, res){
    res.render('index', { title: 'Express'});
};