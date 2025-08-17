// import './index.css'
// import Dd from './component/dd'
// import Bike from './component/bike'
// function Index() {
//   const name = 'HARIHARAN M';
//   return (
//     <>
//         <p>Hi! iam {name}</p>
//         <Dd/>
//     </>
//   )
// }
// export default Index


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/home"
import About from "./pages/about"
import Contect from './pages/contect'
import Project from './pages/project'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
// import User from './pages/user'
import Error from './pages/error'

const App = () => {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contect' element={<Contect/>}/>
      <Route path='/project' element={<Project/>}/>
      {/* <Route path='/users/:username' element={<User/>}/> */}
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
