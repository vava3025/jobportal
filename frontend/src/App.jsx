import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import LoginSignup from './components/Login'
import { Route, Routes } from 'react-router-dom'
import ComRegister from './components/CompanyRegister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Routes>
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/CompanyReg" element={<ComRegister/>} />
      <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
