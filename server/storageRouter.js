const Router = require('express')
const router = new Router()

const roleMiddleware = require('./middleware/roleMiddleware')

//Storage
const storageController = require('./storageController')

router.post('/acceptOrderInList',roleMiddleware(["ADMIN"]), storageController.acceptOrderInList)
router.post('/postIngridientAdd',roleMiddleware(["ADMIN"]), storageController.postIngridientsAdd)

module.exports = router