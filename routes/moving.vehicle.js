let express = require('express');
let router = express.Router();

router.post('/', (req, res, next) => {
    res.send('hello from moving vehicles');
});

module.exports = router;
