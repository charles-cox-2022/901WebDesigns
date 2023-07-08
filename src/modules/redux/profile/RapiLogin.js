import React from "react";
import { useSelector, useDispatch } from 'react-redux';

export const checkUserLogin = async () => {
        let username = document.getElementById("RA-username").value;
        let password = document.getElementById("RA-password").value;
        console.log(username + password)
        return fetch("http://localhost:3001/rapi/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(
            function(response){ console.log(response.json())}
            ).then(
                (response)=> {return(response)})
        }


