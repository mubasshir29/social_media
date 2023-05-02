import express from 'express'
import {getHomeData, addNewRecipe, getRecipesNonVeg, getRecipe,getIngredients} from './../Controllers/pageController.js'

const router = express.Router()

router.get('/', getHomeData)
router.get('/recipe/:id', getRecipe)
router.get('/recipe/:id/ingredients', getIngredients)

router.get('/recipes/:category', getRecipesNonVeg)
router.post('/add/recipe' , addNewRecipe)

export default router