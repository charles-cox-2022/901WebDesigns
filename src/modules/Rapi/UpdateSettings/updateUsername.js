import React from "react";
import { useDispatch } from 'react-redux';
import {useState, useEffect} from "react";
import useFetch from "react-fetch-hook";
import { userLogin } from "../Redux/profileSlice";

const UpdateUsername = (props) => {
   //initialize dispatch
   const dispatch = useDispatch();









   //Start, user is not logged in
   const [isClicked, setIsClicked] = useState(false);
   const [statusMessage, setStatusMessage] = useState('');
   const [username, setUsername] = useState('');
   const [newUsername, setNewUsername] = useState('');

   let local;
   //Are we Local or need to use Heroku?
   if(window.location.href.includes('localhost')){
       local = 'http://localhost:3001'
   }else{
       local = 'https://rokorium-wiki.herokuapp.com'
   }

   const {isLoading, data} = useFetch(`${local}/rapi/updateUser/`, {
       method: "POST",
       body: JSON.stringify({
            action: 'updateUsername',
            username: username,
            newUsername: newUsername,
       }),
       credentials: 'include',
       headers: {
           "Content-type": "application/json; charset=UTF-8"
       },
       depends: [isClicked]
   })
   //When button is clicked, change clicked to false (Ensure Trigger once per click)
   useEffect(()=>{
    isClicked && setIsClicked(false);
},[isClicked]);

//set status message for Register
useEffect(()=>{
        
    //If Loading, set message to Loading
    if(isLoading){
        setStatusMessage('Loading...')
        console.log('Loading')
    }

    if(data && !isLoading){
        if(data.status === true){
            setStatusMessage(`Registered Successfully!`)
            console.log('Registered Successfully')
            dispatch(userLogin({
                id: data.id,
                username: data.username,
                isAdmin: data.isAdmin,
                isLoggedIn: true
            })
            )
            props.setIsUpdating(false)
        } else {
        console.log('Registration Failed: '+ JSON.stringify(data))
        setStatusMessage(`Error: ${data.result}`);
        }
    }
},[data, isLoading])

   
return (
    <React.Fragment>
        <div id="updateUsername">
        <div className="App-Content flex-column margin15 padding25 grey bubble">
            <h3 className="noExtras alignTop">Update Username</h3>
            <div className="alignTop">{statusMessage}</div>
            <div className="alignTop">
                <label style={{fontSize:"21px"}} htmlFor="Name">New Username: </label>
                <input type="text" id="RA-password" name="password"></input><br/>
            </div>
            <div className="alignTop">
            <button className='button' onClick={ () => {
                setUsername(document.getElementById("RA-username").value)
                setNewUsername(document.getElementById("RA-password").value)
                setIsClicked(true)
                }}>
                Submit
            </button>
            </div>
        </div>
        </div>
                </React.Fragment>
)
}
export default UpdateUsername