
import './App.css'
import GreenSection from './component/body/GreenSection'
import Homepage from './component/body/Homepage'
import Slide from './component/body/Slide'
import BreadCrumb from './component/Nav/BreadCrumb'
import Navbar from './component/Nav/Navbar'
import ProgressBr from './component/body/ProgressBr'

function App() {


  return (
    <>
      <Navbar/>
      
      <div className="row mt-0">
        <div className='col-8 mx-auto '>
        <div className="d-flex justify-content-center align-items-center">
     <BreadCrumb/>
      </div></div></div>
      <div className="container mt-1">
     <Homepage/>
      </div>
      <div className='row'>
        <div className='col-8 mt-0 mx-auto'>

          <Slide/>
        </div>
        <div className='row'>
        <GreenSection/>
        </div>
        <div className='row'>
          <ProgressBr/>
        </div>


      </div>
    </>
  )
}

export default App
