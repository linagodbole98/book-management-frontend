import React, { useState  } from "react";
import "./register.css"
import axios from "axios"
// import { useHistory } from "react-router-dom";



function Register(){
    // const history = useHistory()
    const initial ={
        name : "",
        email :"",
        password :"",
        reEnterPassword : ""
    }
    const [user, setUser]= useState(initial)


    const handleChange= e =>{
        console.log(e.target);
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const register=()=>{
        const {name, email, password, reEnterPassword} = user
        if(name && email  && password && reEnterPassword && (password === reEnterPassword)){
           alert("posted")
            axios.post("http://localhost:9002/register", user)
            .then(res =>console.log(res))
        }
        else{
            alert("Invalid input")
        }

        
    }

    return(
        <div className="register">
        {/* {console.log("user", user)} */}
        <div>Register</div>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
       
        <div className="button" onClick={register}>Register</div> 
        <div>or</div>
        {/* <div className="button" onClick={() => history.push("/login")}>Login</div> */}
        </div>
    )
}
export default Register