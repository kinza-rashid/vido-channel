import React from 'react'
import './Footer.css'
import YoutubeIcon from '../../assets/YoutubeLogo.jpg'
import TwitterIcon from '../../assets/TwitterLogo.jpg'
import InstagramIcon from '../../assets/instagramLogo.jpg'
import FacebookLogo from '../../assets/facebookLogo.jpg'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer_icons">
        <img src={YoutubeIcon} alt="" className="img" />
        <img src={TwitterIcon} alt="" className="img"  />
        <img src={InstagramIcon} alt="" className="img"  />
        <img src={FacebookLogo} alt="" className="img"  />
      </div>
      <ul className='footer_items'>
        <div className='footer_block1'>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Card</li>
        </div>
        <div className='footer_block2'>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        </div>
        <div className='footer_block2'>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        </div>
        <div className='footer_block2'>
        <li>Cookie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        </div>
                                                                          
      </ul>
      <p className='copyrightText' >@ 1999  -  {new Date().getFullYear()}   Netflix Inc.</p>
    </div>

  )
}

export default Footer