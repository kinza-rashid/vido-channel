import React from 'react'
import './NavBar.css'
import mainlogo from '../../assets/netflixLogo.jpg'
import SearchIcon from '../../assets/searchIcon.jpg'
import Bell_icon from '../../assets/bell.png'
import Profile from '../../assets/profile.jpg'


const NavBar = () => {
  return (
    <div className="mainDiv">
    <div className='NavBar'>
    <div className="navbar-left">
      <img className='logoimage' src={mainlogo} alt="Image here" />
      <ul>
        <li>Home</li>
        <li>Tv Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by language</li>
      </ul>
    </div>

     <div className="navbar-right">
      <img src={SearchIcon} alt="" className="icons" />
      <p>Childern</p>
        <img src={Bell_icon} alt="" className="icons" />
        <button className='logout-btn'>Log out</button>
      
     </div>

    </div>
    </div>
  )
}

export default NavBar