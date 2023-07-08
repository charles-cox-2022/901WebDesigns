import React from "react";
import { useSelector, useDispatch } from 'react-redux';

export const Settings = () => {
    let user = useSelector((state) => state.profile);
    return(
        <React.Fragment>
            <p id="txt_Username" className='center textwhite'>{user.username}</p>
            <button id="profileDropDown" className="profileBtn">Settings</button>
        </React.Fragment>
    )
}