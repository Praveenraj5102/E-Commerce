
import React from 'react'
import Register from './components/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import { ToastContainer,  } from 'react-toastify';

const App = () => {
  return (
   <BrowserRouter>
   <ToastContainer/>
    <Routes>
      
      <Route path='/' element={<Register/>}/>
      
      <Route path='/signup' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>} />
     
    </Routes>
   </BrowserRouter>
  
 
  )
}

export default App