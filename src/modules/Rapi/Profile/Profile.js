import React from "react";

import { useSelector, useDispatch } from 'react-redux';


const Profile = () => {
    let profile = useSelector((state) => state.profile)
    
    return(
        
            <div className="grid-main textwhite flex-column max80 margin15 padding25 center grey bubble">
                <div className="textwhite center grid-nav">
                    <h1 className="noExtras">Welcome, {profile.username}</h1>
                </div>
                <img id="profileImg"  className="profileIcon" alt='profileIcon'/>



                <p className="noExtras">{`
                username: ${profile.username}\n
                Admin: ${profile.isAdmin} \n 
                Logged in: ${profile.isLoggedIn}`}</p>

            </div>
        
    )
}

export default Profile