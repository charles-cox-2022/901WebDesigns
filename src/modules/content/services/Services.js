import React from "react";
import logo from '../../../logo.svg';
import '../../../App.css';
import '../../../resources/css/mainGrid.css';
import '../../../resources/css/flex.css';
import '../../../resources/css/general.css';
import '../../../resources/css/nav.css'
import './service.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ServiceComponant from "./ServiceComponant";
import Nav from "../../Nav/nav";

const Services = () => {
    let profile = useSelector((state) => state.profile)
    
        const display = () => {
            return(
                <div className="App-Content center flex-column flex-left max">
                    <p className="center siteHeader">Services</p>
                    
                    <div id="aboutUsContent" className="margin15 center grey max80 bubble flex-left flex-column">

                        <p className=""></p>
                        <div className="flex-grid">
                            <ServiceComponant serviceName="Web Design" img="http://localhost:3001/rapi/shanks" serviceDescription="Lets make your mark on the web!"/>
                        </div>
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
                    <h3 className="padding25 center">Welcome, {profile.username}</h3> 
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
export default Services;