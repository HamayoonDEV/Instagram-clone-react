import React from 'react'
import "./navbar.css"
import { FaInstagram} from "react-icons/fa"


function Navbar() {
  return (
    <>
    <div className='nav-container' >
        <div className='nav-left'>
        <div className='logo' >
           <FaInstagram/>
        </div>
        <div className='insta' >
               <h1>Insragram</h1>
        </div>
        
        </div>
        <div className='logout' >
            <h3>Singnin</h3>
        </div>


    </div>
    
    </>
  )
}

export default Navbar