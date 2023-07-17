import React from "react";
import logo from '../../../logo.svg';
import '../../../App.css';
import '../../../resources/css/mainGrid.css';
import '../../../resources/css/flex.css';
import '../../../resources/css/general.css';
import '../../../resources/css/nav.css'
import YouTube from "./YouTube";
//Libraries
const Player = () => {
    const display = () => {
        return(
            <YouTube/>
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
                    <div id="g_id_onload"
                        data-client_id="YOUR_GOOGLE_CLIENT_ID"
                        data-auto_select="true"
                        data-login_uri="https://your.domain/your_login_endpoint">
                    </div>
                    
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

export default Player