const router = require('express').Router();
const User = require('../models/User');
const isAuthorized = require('../middlewares/isAuthorized.js');

// User profile page
router.get('/user/:username/profile', isAuthorized, (req, res) => {
    const usernameAsParam = req.params.username;

    User.findOne({username: usernameAsParam}).lean()
    .populate('products')
    .then(user => {
        res.status(200).json({
            username: user.username,
            products: user.products
        });
    })
    .catch(err => {
        res.status(500).json({
            message: 'Internal server error!',
            hasError: true,
        });
    });
});

router.get('/user/:userId/data', isAuthorized, (req, res) => {
    const userAsParam = req.params.userId;

    User.findOne({_id: userAsParam}).lean()
    .then(user => {
        res.status(200).json({
            username: user.username,
        });
    })
    .catch(err => {
        res.status(500).json({
            message: 'Internal server error!',
            hasError: true,
        });
    });
});

module.exports = router;