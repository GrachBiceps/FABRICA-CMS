const Router = require('express')
const router = new Router()

const roleMiddleware = require('./middleware/roleMiddleware')


//Product Accurate

const prodAccController = require('./prodAccController')

router.post('/createOrderInList',roleMiddleware(["ADMIN"]), prodAccController.createOrderInList)


module.exports = router