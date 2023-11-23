import React from 'react'
import { Link,NavLink,Route,Routes } from 'react-router-dom'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'

export const NavComponent = () => {
  return (
    <div>
        <div className='Nav'>
            
            <br/>
            <Link to="/" className='Links'>Home</Link><br/>
            <Link to="/Login" className='Links'>Login</Link><br/>
            <Link to="/About" className='Links'>About</Link><br/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Login' element={<LoginPage/>} />
            <Route path='/About' element={<AboutPage/>} />
        </Routes>
    </div>
  )
}