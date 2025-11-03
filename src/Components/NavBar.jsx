import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
            <li href="#"> Menu </li>
            <li href="#"> Locaion </li>
            <li href="#"> About </li>
            <li href="#"> Contact </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default NavBar
