import express from 'express'
import {getHomeData, addNewRecipe, getRecipesNonVeg, getRecipe,getIngredients, getUserRecipes,loginHandler,signupHandler,checkLogin,getUserDetails} from './../Controllers/pageController.js'
import verifyToken from './../Middleware/verifyToken.js'
const router = express.Router()

router.get('/', getHomeData)
router.get('/recipe/:id', getRecipe)
router.get('/recipe/:id/ingredients', getIngredients)
router.get('/recipes/:category', getRecipesNonVeg)
router.post('/add/recipe' , addNewRecipe)
router.get('/recipes/user/:userID', getUserRecipes)

router.post('/login', loginHandler)
router.post('/signup', signupHandler)
router.get('/isAuthenticated' , verifyToken, checkLogin)
router.get('/user/:id',getUserDetails)

export default router