import React from "react";
import { Change } from "../redux/redux";
import { useDispatch } from "react-redux";


export const LoginField = ({login}) => {
    const dispatch = useDispatch();
   return(
    <React.Fragment>
        <div className="App-Content textwhite flex-column margin15 padding25 center grey bubble" id="loginField">
            <div>
                <label style={{fontSize:"21px"}} htmlFor="username">Username: </label>
                <input type="text" id="RA-username" name="username"></input><br/>
            </div>
            <div>
                <label style={{fontSize:"21px"}} htmlFor="Name">Password: </label>
                <input type="text" id="RA-password" name="password"></input><br/>
            </div>
            <div>
            <button className='button' onClick={ () => {
                login()
                
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
}