import React from "react";
import { useDispatch } from 'react-redux';
import { Change } from "../redux/redux";

export const Login = () => {
    
    const dispatch = useDispatch();
    return(
        <React.Fragment>
            <button id="profileLogin" className="profileBtn" onClick = {() => dispatch(Change(1))} >Login</button>
        </React.Fragment>
    )
}