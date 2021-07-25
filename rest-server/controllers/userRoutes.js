const router = require('express').Router();
const User = require('../models/User');
const isAuthorized = require('../middlewares/isAuthorized.js');

// User profile page
router.get('/user/:userId/profile', isAuthorized, (req, res) => {
    // get user id
    const userId = req.params.userId;

    // TODO: 
    User.findById(userId)
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

//get current user that is selling the product
router.get('/user/:userId', isAuthorized, (req, res) => {
    // get user id
    const userId = req.params.userId;

    // get user by id from database
    User.findById(userId).lean()
        .then(user => {
            res.status(200).json({
                user
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