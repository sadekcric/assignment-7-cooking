
import './App.css'
import Nav from './Components/Navigation/Nav'
import DisplayProducts from './Components/OurRecipes/DisplayProduct/DisplayProducts'
import Poster from './Components/Poster/Poster'

function App() {
  

  return (
    <>
      <Nav/>
      <Poster/>

      <div className='lg:w-4/5 lg:mx-auto p-2'>
        <DisplayProducts/>
      </div>

    </>
  )
}

export default App
