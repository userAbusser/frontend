import React, { useContext, useRef, useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.svg'
import cart_icon from '../Assets/cart_icon.svg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import navdropdown from '../Assets/dropdown-arrow-svgrepo-com.svg'

const NavBar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

const dropdown_toogle =(e) =>{
menuRef.current.classList.toggle('nav-menu-visible')
e.target.classList.toggle('open');
}

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt =""/>
            <p>PHONIX</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toogle} src={navdropdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Головна</Link>{menu === "shop"? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu("apple")}}><Link style={{textDecoration: 'none'}} to='/apple'>Apple</Link>{menu === "apple"? <hr/>: <></>} </li>
            <li onClick={()=>{setMenu("samsung")}}><Link style={{textDecoration: 'none'}} to='/samsung'>Samsung</Link>{menu === "samsung"? <hr/>: <></>}</li>
            <li onClick={()=>{setMenu("googlepixel")}}><Link style={{textDecoration: 'none'}} to='/googlepixel'>Google Pixel</Link>{menu === "googlepixel"? <hr/>: <></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Вийти</button>
            :  <Link to='/login'><button>Увійти</button></Link>}
         
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default NavBar