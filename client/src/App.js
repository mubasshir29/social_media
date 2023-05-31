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
import NewBuzz from './Components/NewBuzz';
import NewVideo from './Pages/NewVideo';
import Ingredients from './Pages/Ingredients';
import Procedure from './Pages/Cooking';
import Preparation from './Pages/Preparation';
import Cooking from './Pages/Cooking';
import ProfileSection from './Pages/ProfileSection';
import MyRecipes from './Pages/MyRecipes';
import MyStories from './Pages/MyPosts';
import MyVideos from './Pages/MyTapes'
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
import NewChirpPopup from './Components/NewBuzzPopup';
import PixPage from './Pages/PixPage';
import TapesPage from './Pages/TapesPage';
import TapeVideoPage from './Pages/TapeVideoPage';
import Home from './Pages/Home';
import MyPix from './Pages/MyPix';
import EditProfile from './Pages/EditProfile';


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
        <div>
          <Routes>
            <Route path='/' element={<Home/>} >
              <Route path ='/' element={<AllStories/>}/>
              <Route exact path='/pix' element={<PixPage/>} />
              <Route exact path='/tapes' element={<TapesPage/>} />
              <Route exact path='/tapes/:id' element={<TapeVideoPage/>}/>
              <Route exact path='profile' element={<ProfileSection/>} >
                <Route exact path='posts' element={<MyStories/>} />
                <Route exact path='pix' element={<MyPix/>} />
                <Route exact path='tapes' element={<MyVideos/>} />
                <Route exact path='liked' element={<MyLiked/>} />
                <Route exact path='favorites' element={<MyFavorites/>} />
                <Route exact path='info' element={<MyInfo/>} />
            </Route>
            <Route exact path='profile/edit' element={<EditProfile/>} ></Route>
            </Route>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            
            <Route path='/new/chirp' element={<NewChirpPopup/>}/>
            <Route path='/new/short' element={<NewBuzz/>} />
            <Route path='/new/video' element={<NewVideo/>} />
          </Routes>
        </div>
  );
}
export default App;
