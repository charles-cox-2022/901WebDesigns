import React from "react";
import logo from '../../../logo.svg';
import '../../../App.css';
import '../../../resources/css/mainGrid.css';
import '../../../resources/css/flex.css';
import '../../../resources/css/general.css';
import '../../../resources/css/nav.css'
import Calendly from "./Calendly";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "../../Nav/nav";
import ProfileDropDown from "../../ProfileOptions/ProfileDropDown";
//Libraries
const ContactUs = () => {
    let profile = useSelector((state) => state.profile)
    const display = () => {
        return(
            <Calendly/>
        )
    }
    const profileDisplay = () => {
            
        if(profile.isLoggedIn == false){
            return(
                <nav className="center padding25">
                <Link className='' to='/Login'>Login</Link>
                </nav>
            )
        } else {
            return(
                <div>
                <h4 className="padding25 center">Welcome, {profile.username}</h4>
                <ProfileDropDown/>
            </div>
            )
        }
    
}



        return(
            <div className="App">
                <header id="grid-main" className="grey">
                 <Nav/>
                 
                    <img src={logo} className="App-logo grid-logo" alt="logo" />
                    <div className="profile">
                        {
                           profileDisplay() 

                        }
                    </div>
                    
                    <div className="grid-left grey bubble">

                    </div>
                    <div className="grid-content center flex-left flex-column">
                    <p className="center textwhite siteHeader">Schedule a Meeting!</p>
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

export default ContactUs