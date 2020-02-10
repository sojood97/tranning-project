var express = require('express');
var router = express.Router();
var controller = require('./lists.controller');


router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.delete('/:id', controller.delete);
router.patch('/:id', controller.edit);

module.exports = router;