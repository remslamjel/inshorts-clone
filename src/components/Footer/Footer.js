import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <span className='name'>
            Inshorts clone by <a href="google.com" rel="noreferrer" target="_blank">Ram Lamjel</a>
        </span>
        <hr style={{width: "90%"}}/>
        <div className='social-icons'>
            <a href="google.com" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="google.com" target="_blank">
                <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="google.com" target="_blank">
                <i className="fa-brands fa-square-twitter"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer