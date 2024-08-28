const express = require ('express')
const router  = express.Router()
const {registerUser, authUser} = require('../controllers/userControllers')
router.route('/').post(registerUser)
router.route('/login').post(authUser)
//router.route('/login').post(authUser)

// the above can be done like below also 
// router.post('/' , retisterUser)
// router.post('/login).post(authUser)

module.exports   = router