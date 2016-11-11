/**
 * Created by Ralph on 10/11/2016.
 */
/* GET home page */
module.exports.index = function(req, res){
    res.render('index', { title: 'Home'});
    console.log('index page called');
};
/* GET list page */
module.exports.list = function(req, res){
    res.render('list', { title: 'Note List'});
    console.log('list page called');
};
/* GET editor page */
module.exports.editor = function(req, res){
    res.render('editor', { title: 'Note Editor'});
    console.log('editor page called');
};
/* GET defaultNote page */
module.exports.defaultNote = function(req, res){
    res.render('defaultNote', { title: 'Default'});
    console.log('default page called');
};