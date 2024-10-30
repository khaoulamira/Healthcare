import './App.css'
import Homepage from './component/body/Homepage'
import Slide from './component/body/Slide'
import Navbar from './component/Nav/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <div className="container mt-5">
     <Homepage/>
      </div>
      <div className='row'>
        <div className='col-8 mt-2 mx-auto'>

          <Slide/>
        </div>

      </div>
    </>
  )
}

export default App
