import React from "react";
import logo from '../../../logo.svg';
import '../../../App.css';
import '../../../resources/css/mainGrid.css';
import '../../../resources/css/flex.css';
import '../../../resources/css/general.css';
import '../../../resources/css/nav.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFetch from "react-fetch-hook";
import Nav from "../../Nav/nav";
import ProfileDropDown from "../../ProfileOptions/ProfileDropDown";

const Testimonials = () => {
    let profile = useSelector((state) => state.profile)
    
        const display = () => {
            return(
                <div className="App-Content center flex-column flex-left max">
                    <p className="padding25 center siteHeader">Testimonials</p>
                    
                    <div id="aboutUsContent" className="margin15 center grey max80 bubble flex-left flex-column">

                        <p className="">
                            We have helped quite a few people make their mark on the web... Here are a few:  
                        </p>
                            
                    </div>
                </div>
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
                        <h3 className="padding25 center">Welcome, {profile.username}</h3>
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
                        {
                            display()
                        }
                    <p className='center padding25'>Designed by 901 Web Designs</p>
                    </div>
                    <div class="grid-right grey bubble">

                    </div>
                </header>
            </div>
            )
}
export default Testimonials;