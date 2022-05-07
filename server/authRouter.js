const Router = require('express')
const router = new Router()

//Authorization
const controller = require('./authController')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')
const upload = require('./middleware/upload')


//User
router.post('/registration', [
    check('username', 'Имя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше 6 и меньше 16').isLength({min:6, max:16}),
    ], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(["ADMIN"]), controller.users)
router.post('/edituserdata', roleMiddleware(["USER"]),upload.single('avatar'), controller.editUserData)



//Storage
const storageController = require('./storageController')

router.post('/storage/acceptOrderInList',roleMiddleware(["ADMIN","STORAGER"]), storageController.acceptOrderInList)
router.post('/storage/postIngridientAdd',roleMiddleware(["ADMIN","STORAGER"]), storageController.postIngridientsAdd)
router.get('/storage/getAllOrderInList',roleMiddleware(["ADMIN","STORAGER"]), storageController.getAllOrderInList)
router.get('/storage/getIngredientList', roleMiddleware(["ADMIN","STORAGER"]), storageController.getIngredientList)


//Product Accurate

const prodAccController = require('./prodAccController')

router.post('/prodacc/createOrderInList',roleMiddleware(["ADMIN","PRODACCOUNTANT"]), prodAccController.createOrderInList)


module.exports = router