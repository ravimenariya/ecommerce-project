//express import 
const express = require('express');
const userController = require('../controllers/userController')
//express.Router()
const router = express.Router();

router.post('/register', userController.signUp);
router.post('/login', userController.login);
router.get('/register', (req, res) => {
    res.send(" on register in api");
}
);

module.exports = router;