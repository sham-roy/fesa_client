import React from 'react'
import Register from './register/Register.js'
import Login from './login/Login.js'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Profile from './profile/Profile.js'
// import Footer from './Footer.js'
import Edit from './Edit/Edit.js'



function App() {
  return (
    <div>
      <Routes>
        <Route path="/profile" element={ <Profile/> } />
        <Route path='/home' element={ <Home/> } />
        <Route path='/signUp' element={ <Register/> } />
        <Route path='/' element={ <Login/> } />
        <Route path='/Edit/:pid' element={ <Edit/> } />
      </Routes>
      {/* <Footer/> */}
      
    </div>
  )
}

export default App