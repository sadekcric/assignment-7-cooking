
import './App.css'
import Nav from './Components/Navigation/Nav'
import DisplayProducts from './Components/OurRecipes/DisplayProduct/DisplayProducts'
import Poster from './Components/Poster/Poster'

function App() {
  

  return (
    <>
      <Nav/>
      <Poster/>

      <div className='text-center space-y-3 lg:space-y-5 p-2 lg:w-2/3 lg:mx-auto mb-5'>
      <h3 className='text-3xl lg:text-5xl font-bold'>Our Recipes</h3>
      <p className='text-lg lg:text-xl'>Discover calorie-burning recipes designed to fuel your body and ignite metabolism. From savory dishes to guilt-free treats, optimize your health journey with Our Recipes.</p>
      </div>

      <div className='lg:w-4/5 lg:mx-auto p-2'>
        <DisplayProducts/>
      </div>

    </>
  )
}

export default App
