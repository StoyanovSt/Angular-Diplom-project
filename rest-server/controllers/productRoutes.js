const router = require('express').Router();
const Product = require('../models/Product');
const User = require('../models/User');
const isAuthorized = require('../middlewares/isAuthorized.js');

// Create product
router.post('/product/create', isAuthorized, (req, res) => {
    // get data
    let { product, description, imageUrl, price } = req.body;

    //validate data
    if (product === '') {
        res.status(409).json({
            message: 'Invalid input!',
            hasError: true,
        });

        return;
    }

    if (description === '') {
        res.status(409).json({
            message: 'Invalid input!',
            hasError: true,
        });

        return;
    }

    if (description.length < 10 || description.length > 150) {
        res.status(409).json({
            message: 'Description must be between 10 and 150 characters long!',
            hasError: true,
        });

        return;
    }

    if (imageUrl === '') {
        res.status(409).json({
            message: 'Invalid input!',
            hasError: true,
        });

        return;
    }

    if (price === '') {
        res.status(409).json({
            message: 'Invalid input!',
            hasError: true,
        });

        return;
    }

    if (price < 0) {
        res.status(409).json({
            message: 'Selling price must be non negative number!',
            hasError: true,
        });

        return;
    }

    const userId = req.user._id;

    // store in database
    const newProduct = new Product({
        product,
        description,
        imageUrl,
        price,
        seller: userId,
    });


    newProduct.save()
        .then(product => {
            User.findById(userId)
                .then(user => {
                    user.products.push(product._id);
                    return user.save();
                })
                .then(response => {
                    res.status(201).json({
                        message: 'Product successfully stored in database!',
                        hasError: false,
                    });
                })
                .catch(err => {
                    res.status(404).json({
                        message: 'User not found!',
                        hasError: true,
                    });
                });

        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong! Failed to store product in database!',
                hasError: true,
            });
        });
});

// Delete product
router.get('/product/:productId/delete', isAuthorized, (req, res) => {
    // get product id
    const productId = req.params.productId;

    // find it is database by id and delete it
    Product.findByIdAndDelete(productId)
        .then(response => {
            res.status(200).json({
                message: 'Product has been unstored!',
                hasError: false,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        });
});

// Edit product
router.get('/product/:productId/edit', isAuthorized, (req, res) => {
    // get product id
    const productId = req.params.productId;

    // get product by id from database
    Product.findById(productId).lean()
        .then(product => {
            res.status(200).json({
                product,
                notification: {
                    hasError: false,
                    message: '',
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                hasError: true,
                message: 'Internal server error!',
            });
        });
});

router.post('/product/:productId/edit', isAuthorized, (req, res) => {
    // get editted data
    const { product, description, imageUrl, price } = req.body;

    // get product id
    const productId = req.params.productId;

    // find one and update multiple
    Product.updateOne({ _id: productId }, { product: product })
        .then(response => {
            return Product.updateOne({ _id: productId }, { description: description });
        })
        .then(response => {
            return Product.updateOne({ _id: productId }, { imageUrl: imageUrl });
        })
        .then(response => {
            return Product.updateOne({ _id: productId }, { price: price });
        })
        .then(response => {
            // get product by id from database
            Product.findById(productId).lean()
                .then(product => {
                    res.status(200).json({
                        product,
                        notification: {
                            hasError: false,
                            message: 'Product has been successfully eddited!',
                        }
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Internal server error!',
                        hasError: true,
                    });
                });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        })
});

// Product details
router.get('/product/:productId/details', async (req, res) => {
    const productId = req.params.productId;
    const info = {};

    info['product'] = await Product.findById(productId).lean();

    const currentLoggedUserId = info['product'].seller;
    info['user'] = await User.findById(currentLoggedUserId).lean();

    return res.status(200).json({
        product: info['product'],
        user: info['user']
    });
});

// Like product
router.patch('/product/:productId/like', (req, res) => {
    // get editted data
    const { countOfLikes, currentUser } = req.body;

    // get product id
    const productId = req.params.productId;

    // find one and update multiple
    Product.updateOne({ _id: productId }, { likes: countOfLikes })
        .then(response => {
            return Product.updateOne({ _id: productId }, { $push: { peopleLikedProduct: currentUser } })
        })
        .then(response => {
            // get product by id from database
            Product.findById(productId).lean()
                .then(product => {
                    res.status(200).json({
                        product
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Internal server error!',
                        hasError: true,
                    });
                });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error!',
                hasError: true,
            });
        })
});

// Get all froducts by criteria
router.get('/:criteria', (req, res) => {
    const searchedCriteria = req.params.criteria;

    if (!searchedCriteria) {
        return;
    }

    Product.find({ product: searchedCriteria })
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