import React from "react";

export const Settings = ({user}) => {
    return(
        <React.Fragment>
            <p id="txt_Username" className='center textwhite'>{user}</p>
            <button id="profileDropDown" className="profileBtn">Settings</button>
        </React.Fragment>
    )
}