var express = require('express')
var router = express.Router()
const user = require('../controllers/UserController') 

router.get('/',user.user)

router.post('/add',user.add)

module.exports = router