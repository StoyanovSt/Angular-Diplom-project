const router = require('express').Router();
const Product = require('../models/Product');
const isAuthorized = require('../middlewares/isAuthorized.js');

// Home page
router.get('/home', isAuthorized, (req, res) => {
    // get all products
    Product.find()
        .lean()
        .then(products => {
            res.status(200).json(
                products
            );
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        });
});

// home guest - 3 most liked onces
router.get('/', (req, res) => {
    // get most liked products
    Product.find()
        .sort({ peopleLikedProduct: -1 })
        .limit(3)
        .lean()
        .then(products => {
            res.status(200).json(
                products
            );
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        });
});

module.exports = router;