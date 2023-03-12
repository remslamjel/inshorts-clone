import React from 'react'
import "./NavBarInshorts.css"
import HamburgerDrawer from "./HamburgerDrawer"


const NavBarInshorts = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className="icon">
            <HamburgerDrawer setCategory={setCategory}/>
        </div>
        <img
            style= {{cursor: "pointer"}} 
            src = "https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
            alt = "logo" 
            height="57px"
        />
    </div>
  )
}

export default NavBarInshorts