import React from "react";
import { Login } from "./login";
import { Settings } from "./settings";
import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';

const Profile = (props) => {
    
    const [user,setUser] = useState({
        root:false,
        loggedIn: false,
        username: "",
        token: "Empty",
        settings: [
            {
                id: 0,
                name: "",
                options: "",
                activeOption: ""
            }
        ],
        
    });
    
    
    const dispatch = useDispatch();

    let setting = useSelector((state) => state.setting.loggedIn);
    const display = () =>{
    switch (setting) {
        case false:
            return(<Login/>)
            break;
        case true:
            return(<Settings user={user.username}/>)
            break;
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