import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://www.facebook.com/NetflixAsia/?brand_redir=475822799216240" target='_blank'> <img src={facebook_icon} alt="" /></a>
        <a href="https://www.instagram.com/netflix/" target='_blank' ><img src={instagram_icon} alt="" /></a>
        <a href="https://x.com/netflix" target='_blank'> <img src={twitter_icon} alt="" /></a>
        <a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw" target='_blank'><img src={youtube_icon} alt="" /></a>

      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 1997-2023 Netflix , Inc.</p>
    </div>
  )
}

export default Footer
