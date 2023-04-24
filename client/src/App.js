
import './App.css';
import CorossolMenu from './Components/CorossolMenu';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import NonVeg from './Pages/NonVeg';
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

function App() {
  return (
    <div className='bg-white min-h-screen w-screen flex flex-col relative'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/non-veg' element={<NonVeg/>} />
        <Route path='/veg' element={<NonVeg/>} />
        <Route path='/snacks' element={<Snacks/>} />
        <Route path='/breakfast' element={<Breakfast/>} />
        <Route path='/non-veg/:id' element={<RecipePage/>} >
          <Route index element={<Ingredients/>}/>
          <Route path='ingredients' element={<Ingredients/>} />
          <Route path='cooking' element={<Cooking/>} />
          <Route path='preparation' element={<Preparation/>} />  
        </Route>
        <Route path='/new/recipe' element={<NewRecipe/>} />
        <Route path='/new/story' element={<NewStory/>} />
        <Route path='/new/video' element={<NewVideo/>} />
      </Routes>
    </div>
  );
}
export default App;
