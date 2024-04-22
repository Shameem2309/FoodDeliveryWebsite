import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo2}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias magnam unde aut repellat a fugiat vero, eaque soluta quis, animi ut sint quasi delectus, veritatis exercitationem tenetur vitae veniam!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>

                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touth</h2>
                <ul>
                    <li>+-234-579-34</li>
                    <li>contact.help@yumrush.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copy-right">Copy Rights 2024 @ YumRush.com .All rights reserved
</p>

    </div>
  )
}

export default Footer