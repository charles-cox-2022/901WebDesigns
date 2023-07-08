import React, { useEffect } from "react";
import { Login } from "./login";
import { Settings } from "./settings";
import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';

const Profile = (props) => {
    const dispatch = useDispatch();
    
    let user = useSelector((state) => state.profile);
    

    const display = () =>{
    switch (user.isLoggedIn){
        case false:
            console.log(user)
            return(<Login/>)
        case true:
            console.log(user)
            return(<Settings user={user.username}/>)
        default:
            break;
    }
    }
    
    return(
            <React.Fragment>
                <div className="grid-profile">
                    <img id="profileImg" src={props.icon} className="profileIcon" alt='profileIcon'/>
                    <div class="center">
                        {
                            display()
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    
}

export default Profile;