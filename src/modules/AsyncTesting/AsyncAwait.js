import React from "react";
import useFetch from "react-fetch-hook";


//When called in another file, it must be followed with a .then




const AsyncTest = async () => {
    let users = await fetch('https://randomuser.me/api/?results=2');
    return users.json();
}

export default AsyncTest