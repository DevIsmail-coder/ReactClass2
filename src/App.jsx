import { useState,createContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './component/NavBar/NavBar'
import HomePage from './component/HomePage'
import LoginPage from './component/LoginPage'
import SignupPage from './component/SignupPage'
import LandingPage from './component/LandingPage'
import './App.css'

export const AppContext = createContext();
function App() {
  const [userName,setUserName] = useState("dev Ismail")

  return (
    <div>
      <AppContext.Provider value={{userName,setUserName}}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element ={<HomePage />} />
      <Route path='/LoginPage' element ={<LoginPage /> } />
      <Route path='/SignupPage' element ={<SignupPage/>} />
      <Route path='/LandingPage' element ={<LandingPage/>} />
      </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App
