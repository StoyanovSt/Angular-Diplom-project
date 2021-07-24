const router = require('express').Router();

const homeController = require('./controllers/homeRoutes.js');
const authController = require('./controllers/authRoutes.js');
const productController = require('./controllers/productRoutes.js');
const userPagesController = require('./controllers/userRoutes.js');

router.use(homeController);
router.use(authController);
router.use(productController);
router.use(userPagesController);

module.exports = router;