
import './App.css';
import CorossolMenu from './Components/CorossolMenu';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Recipes from './Pages/Recipes';
import Snacks from './Pages/Snacks'
import Breakfast from './Pages/Breakfast';
import RecipePage from './Pages/RecipePage'
import NewRecipe from './Pages/NewRecipe';
import NewStory from './Pages/NewStory';
import NewVideo from './Pages/NewVideo';
import Ingredients from './Pages/Ingredients';
import Procedure from './Pages/Cooking';
import Preparation from './Pages/Preparation';
import Cooking from './Pages/Cooking';
import ProfileSection from './Pages/ProfileSection';
import MyRecipes from './Pages/MyRecipes';
import MyStories from './Pages/MyStories';
import MyVideos from './Pages/MyVideos'
import MyLiked from './Pages/MyLiked';
import MyFavorites from './Pages/MyFavorites';
import MyInfo from './Pages/MyInfo';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import { useSelector, useDispatch } from 'react-redux';
import {checkLoginStatus} from './Utils/api.js'
import { setLogin } from './Redux/authSlice';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch()

  const loginCheck = async ()=>{
    const checkResponse = await checkLoginStatus()
    //console.log(checkResponse)
    if(checkResponse){
      if(checkResponse.isLogged){
        dispatch(setLogin(checkResponse.user))
      }
      //dispatch(setLogin(checkLogin.user.user_name))
    }
   }
  useEffect(()=>{
    loginCheck()
  },[])
  return (
    <div className='bg-white min-h-screen w-screen flex flex-col relative'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/recipes/:category' element={<Recipes/>} />
        <Route path='/recipes/:category/:id' element={<RecipePage/>} >
          <Route index element={<Ingredients/>}/>
          <Route path='ingredients' element={<Ingredients/>} />
          <Route path='cooking' element={<Cooking/>} />
          <Route path='preparation' element={<Preparation/>} />  
        </Route>
        <Route path='profile' element={<ProfileSection/>} >
          <Route path='recipes' element={<MyRecipes/>} />
          <Route path='stories' element={<MyStories/>} />
          <Route path='videos' element={<MyVideos/>} />
          <Route path='liked' element={<MyLiked/>} />
          <Route path='favorites' element={<MyFavorites/>} />
          <Route path='info' element={<MyInfo/>} />
        </Route>
        <Route path='/new/recipe' element={<NewRecipe/>} />
        <Route path='/new/story' element={<NewStory/>} />
        <Route path='/new/video' element={<NewVideo/>} />
      </Routes>
    </div>
  );
}
export default App;
