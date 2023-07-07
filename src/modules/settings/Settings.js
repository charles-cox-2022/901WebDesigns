import React, {Component} from "react";
import { LoginField } from "../profile/LoginForm";
import { useSelector, useDispatch } from 'react-redux';
import authenticate from "../../resources/js/authenticate";
import { Change,newUser,LoggedIn } from "../redux/redux";

const Settings = () => {
    let setting = useSelector((state) => state.setting.value);
    const dispatch = useDispatch();
    const login = () => {
        let user = document.getElementById("RA-username").value
        let pass = document.getElementById("RA-password").value
        let result = authenticate(user,pass);
        dispatch(newUser(result.username))
        dispatch(LoggedIn(result.loggedIn))
        dispatch(Change(0))
    }
    
    
    const displayContent = () => {
        switch (setting) {
            case 0:
                break;
            case 1:
                return(<LoginField login={ () => login()}/>)
                break;
            default:

                break;
        }
    }


     
    return (
        <React.Fragment>
            {displayContent()}
        </React.Fragment>
    )
    
}

export default Settings;