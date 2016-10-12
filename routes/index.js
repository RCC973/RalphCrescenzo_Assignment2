var express = require('express');
var router = express.Router();
var ctrlMain = require ('../controllers/main');

/* GET pages. */
router.get('/', ctrlMain.index);
router.get('/locations/default', ctrlMain.defaultNote);
router.get('/locations/editor', ctrlMain.editor);
router.get('/locations', ctrlMain.list);

module.exports = router;
