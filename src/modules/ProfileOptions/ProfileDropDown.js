import React from "react";
import './profileDropDown.css';
import { Link } from "react-router-dom";

const ProfileDropDown = () => {
    return (
        <React.Fragment>
            <p className="profileDropDown">Options</p>
            <div className="profileDropDownItems">
                <Link to="/Profile" className="navButton">Profile</Link>
            </div>
        </React.Fragment>
    )
}

export default ProfileDropDown