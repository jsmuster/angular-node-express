var express = require('express');
var uid = require('uid-safe');

var router = express.Router();

/* GET a guid. */
router.get('/', function(req, res, next)
{
	var strUid = uid.sync(18);

	res.json({guid: strUid});
});

module.exports = router;
