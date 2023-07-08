import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { Change,newUser,LoggedIn } from "../redux/redux";
import { Login,Logout,selectProfileIsLoggedIn } from "../redux/profile/profileSlice";
import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";

const Settings = () => {
    
    const dispatch = useDispatch();
    let setting = useSelector((state) => state.setting.value);
    const [isClicked, setIsClicked] = useState(false);
    const [message, setMessage] = useState(''); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isLoading, data } = useFetch("http://localhost:3001/rapi/login", {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        depends: [isClicked]
    });

    
    useEffect(()=>{
        isClicked && setIsClicked(false);
    },[isClicked]);

    useEffect(()=>{
        if(isLoading){
            setMessage('Loading...')
        }
        if(data && !isLoading){
            if(data.auth === true){
                dispatch(Login({
                    id: data.id,
                    username: data.username,
                    isAdmin: true,
                    isLoggedIn: true
                })
                )
                dispatch(Change(0))
            }
            console.log(JSON.stringify(data))
            setMessage(JSON.stringify(data));
        }
    },[data, isLoading])

    const displayContent = () => {

        switch (setting) {
            case 0:
                break;
            case 1:
                return(
                    <React.Fragment>
                    <div className="App-Content textwhite flex-column margin15 padding25 center grey bubble" id="loginField">
                        <div>{message}</div>
                        <div>
                            <label style={{fontSize:"21px"}} htmlFor="username">Username: </label>
                            <input type="text" id="RA-username" name="username" ></input><br/>
                        </div>
                        <div>
                            <label style={{fontSize:"21px"}} htmlFor="Name">Password: </label>
                            <input type="password" id="RA-password" name="password" ></input><br/>
                        </div>
                        <div>
                        <button className='button' onClick={() => {
                            setUsername(document.getElementById("RA-username").value)
                            setPassword(document.getElementById("RA-password").value)
                            setIsClicked(true)
                            }}>
                            Login
                        </button>
                        
                        <button className="button" onClick={ () => {
                            dispatch(Change(0))
                        }}>Close </button>
                        </div>
                    </div>
                </React.Fragment>
                )
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