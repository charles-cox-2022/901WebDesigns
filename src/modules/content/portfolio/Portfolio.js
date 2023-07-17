import React from "react";
import logo from '../../../logo.svg';
import '../../../App.css';
import '../../../resources/css/mainGrid.css';
import '../../../resources/css/flex.css';
import '../../../resources/css/general.css';
import '../../../resources/css/nav.css'
const Portfolio = () => {
    
    
        const display = () => {
            return(
                <div className="App-Content center flex-column flex-left max">
                    <h2 className="center textwhite">Portfolio</h2>
                    
                    <div id="aboutUsContent" className="margin15 center grey max80 bubble flex-left flex-column">

                        <p className="textwhite">
                            Together we have created several web apps and are looking for more exciting projects! Here are some: 
                        </p>
                    </div>
                </div>
            )
        }
            return(
                <div className="App">
                    <header id="grid-main" className="grey">
                        <div className="grid-nav center textwhite flex-column"> 
                            <h1>901 Web Designs</h1>
                            <nav className="center">
                                <a className='navButton' href='/about'>About</a>
                                <a className='navButton' href='/contact'>Contact</a>
                                <a className='navButton' href='/portfolio'>Portfolio</a>
                            <a href="#">Services</a>
                            <a href="#">Testimonials</a>
                            </nav>
                        </div>
                        <img src={logo} className="App-logo grid-logo" alt="logo" />
    
                        
                        <div className="grid-left grey bubble">
    
                        </div>
                        <div className="grid-content center flex-left flex-column">
                            {
                                display()
                            }
                        <p className='textwhite center padding25'>Designed by 901 Web Designs</p>
                        </div>
                        <div class="grid-right grey bubble">
    
                        </div>
                    </header>
                </div>
            )
}
export default Portfolio;