const express = require('express');

const router = express.Router();

router.get('/:query/:number', (req, res) => {
            res.write(req.params.query + ":" + req.params.number);
            res.end();
});

module.exports = router;




