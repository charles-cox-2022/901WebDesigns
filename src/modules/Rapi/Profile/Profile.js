import React from "react";
import { useSelector, useDispatch } from 'react-redux';


const Profile = () => {
    let profile = useSelector((state) => state.profile)
    
    return(
        
            <div className="grid-main flex-column max80 margin15 padding25 center grey bubble">
                <div className="grid-nav flex-column alignTop max">
                    <h1 className="noExtras">Welcome, {profile.username}</h1>
                    <img id="profileImg" src="../images/Cute Dog Photo.jpg" className="profileIcon" alt='profileIcon'/>
                </div>
                <div className="grid-content flex-column alignTop max">
                    <p className="noExtras">{`username: ${profile.username}`}</p>
                    <p className="noExtras">{`Admin: ${profile.isAdmin}`}</p>
                    <p className="noExtras">{`Logged in: ${profile.isLoggedIn}`}</p>
                </div>
            </div>
        
    )
}

export default Profile