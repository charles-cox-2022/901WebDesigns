import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useState, useEffect} from "react";
import UpdateUsername from "../UpdateSettings/updateUsername";
import { userLogin } from "../Redux/profileSlice";

const Profile = () => {
    let profile = useSelector((state) => state.profile)

    const [isUpdating, setIsUpdating] = useState('');
    return(
        
            <div className="grid-main flex-column max80 margin15 padding25 center grey bubble">
                <div className="grid-nav flex-column alignTop max">
                    <h1 className="noExtras">Welcome, {profile.username}</h1>
                </div>
                <div className="grid-content flex-column alignTop max">
                    <img id="profileImg" src="./Cute Dog Photo.jpg" className="profileIcon" alt='profileIcon'/>
                    <p className="noExtras">{`Username: ${profile.username}`}</p>
                    <p className="noExtras">{`Admin Status: ${profile.isAdmin}`}</p>
                    <p className="noExtras">{`Logged in: ${profile.isLoggedIn}`}</p>
                </div>
                <UpdateUsername/>
            </div>
        
    )
}

export default Profile