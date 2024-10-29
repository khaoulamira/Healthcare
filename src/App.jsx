import './App.css'
import Homepage from './component/body/Homepage'
import Navbar from './component/Nav/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <div className="container mt-5">
     <Homepage/>
    </div>
    </>
  )
}

export default App
