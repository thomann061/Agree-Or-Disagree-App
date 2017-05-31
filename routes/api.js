var express = require('express');
var router = express.Router();
const StatementAccess = require('../lib/statementaccess.js');

/* GET all Statements */
router.get('/statements', function(req, res, next) {

  res.json(new StatementAccess().getAll());
});

module.exports = router;
