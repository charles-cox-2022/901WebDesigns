import React from "react";
import logo from '../../../logo.svg';
import '../../../App.css';
import '../../../resources/css/mainGrid.css';
import '../../../resources/css/flex.css';
import '../../../resources/css/general.css';
import '../../../resources/css/nav.css'
import Rapi from "../../Rapi/rapi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../Nav/nav";
const Profile = () => {
    
    let profile = useSelector((state) => state.profile)
        const display = () => {
            return(
                <Rapi/>
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
                <h5 className="margin15 center">Welcome, {profile.username}</h5> 
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
                        
                        <div className="grid-left bubble">
    
                        </div>
                        <div className="grid-content center flex-left flex-column">
                            {
                                display()
                            }
                        <p className='center padding25'>Designed by 901 Web Designs</p>
                        </div>
                        <div class="grid-right bubble">
    
                        </div>
                    </header>
                </div>
            )
}
export default Profile;