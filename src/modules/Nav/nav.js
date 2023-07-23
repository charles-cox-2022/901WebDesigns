import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="grid-nav center textwhite flex-column padding25"> 
            <h1>901 Web Designs</h1>
            <nav className="center">
                <Link className='navButton' to='/about'>About</Link>
                <Link className='navButton' to='/services'>Services</Link>
                <Link className='navButton' to='/portfolio'>Portfolio</Link>
                <Link className='navButton' to='/contact'>Contact</Link>
                <Link className='navButton' to='/testimonials'>Testimonials</Link>
            </nav>
        </div>
    )
}

export default Nav