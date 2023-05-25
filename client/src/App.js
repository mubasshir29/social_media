
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
import NewChirp from './Components/NewChirp';
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
import AllStories from './Pages/AllStories';
import Sidebar from './Components/Sidebar';
import NewsFeed from './Pages/NewsFeed';
import NewChirpPopup from './Components/NewChirpPopup';
import PixPage from './Pages/PixPage';
import TapesPage from './Pages/TapesPage';


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
      <div className='flex w-[1220px] mx-auto mt-16'>
        <div className='relative w-[18%] hidden md:block'>
          <Sidebar/>
        </div>
     
        <div className='w-[60%]'>
        <Routes>
          <Route path='/' element={<AllStories/>} />
          <Route path='/pix' element={<PixPage/>} />
          <Route path='/tapes' element={<TapesPage/>} />
          <Route path='/shorts' element={<AllStories/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='profile' element={<ProfileSection/>} >
            <Route path='stories' element={<MyStories/>} />
            <Route path='videos' element={<MyVideos/>} />
            <Route path='liked' element={<MyLiked/>} />
            <Route path='favorites' element={<MyFavorites/>} />
            <Route path='info' element={<MyInfo/>} />
          </Route>
          <Route path='/new/chirp' element={<NewChirpPopup/>}/>
          <Route path='/new/short' element={<NewChirp/>} />
          <Route path='/new/video' element={<NewVideo/>} />
        </Routes>
        </div>
        <div className='w-[22%] hidden md:block'>
          <NewsFeed/>
        </div>
      </div>
    </div>
  );
}
export default App;
