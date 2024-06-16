import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import facebook_icon from '../Assets/facebook.png'
export const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-logo">
    <p>PHONIX</p>
</div>
<ul className='footer-links'>
    <li>Компанія</li>
    <li>Продукти</li>
    <li>Офіси</li>
    <li>Про нас</li>
    <li>Зв'язатись з нами</li>
</ul>
<div className="footer-social-icons">
    <div className="footer-icons-container">
        <img src={instagram_icon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={facebook_icon} alt="" />
    </div>
</div>

<div className="footer-copyright">
    <hr/>

<p>Copyright @ 2024 - Всі права захищені</p>
</div>
    </div>
  )
}

export default Footer