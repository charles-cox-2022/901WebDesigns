
export default function authenticate(user, pass) {
    if(user === "Rokoria" && pass === "password"){
        return ({loggedIn: true, username:user, token: "XXxxXX"});
    }else{
        alert("Access Denied: Invalid Username or Password!");
        return ({loggedIn: false, username:"Null", token: "Null"});
    }
}