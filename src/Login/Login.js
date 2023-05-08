
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage=() =>{
    let auth = getAuth();
    const [userName, setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [login,setLogin] = useState(false);
    const [register,setRegister] = useState(true);
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [userNameError,setUserNameError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [firstNameError,setFirstNameError] = useState(false);
    const[lastNameError,setLastNameError] = useState(false);

    const errorMsg = "This is a required field*"

    const handleSubmit= ()=>{
        createUserWithEmailAndPassword(auth,userName,password)
        .then((response)=>{
            console.log(response.user)
            alert("Register successful")
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    const handleLogin = () =>{
        signInWithEmailAndPassword(auth,userName,password)
        .then((response)=>{
            console.log(response.user)
            alert("Login successful")
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    
    const showLogin = ()=>{
       setLogin(false)
       setRegister(true)
       setUserName('')
       setPassword('')
       setUserNameError(false)
       setPasswordError(false)
       setFirstNameError(false)
       setLastNameError(false)
    }

    const showRegister = ()=>{
        setRegister(false)
        setLogin(true)
        setFirstName('')
        setLastName('')
        setUserName('')
        setPassword('')
        setUserNameError(false)
        setPasswordError(false)
        setFirstNameError(false)
        setLastNameError(false)
    }

   const onChangeUserName = (e)=>{
     setUserName(e.target.value)
     if(e.target.value == ""){
        setUserNameError(true)
     }
     else{
        setUserNameError(false)
     }
   }

    const onChangePassword = (e)=>{
    setPassword(e.target.value)
    if(e.target.value == ""){
        setPasswordError(true)
     }
     else{
        setPasswordError(false)
     }
   }

    const onChangeFirstName = (e)=>{
    setFirstName(e.target.value)
    if(e.target.value == ""){
        setFirstNameError(true)
     }
     else{
        setFirstNameError(false)
     }
   }

    const onChangeLastName = (e)=>{
        setLastName(e.target.value)
        if(e.target.value == ""){
            setLastNameError(true)
         }
         else{
            setLastNameError(false)
         }
   }


    return (
        <div className="center-items">

        <a onClick={showLogin}>Login</a>&nbsp; | &nbsp;
        <a onClick={showRegister}>Register</a>
        <div className="login" hidden={login}>
            <h2>Login</h2>
            <div className="row">
            <label htmlFor="username">Username</label>
            <InputText id="username" value={userName} onChange={onChangeUserName} />
            </div>
            <span className="errorMsg" hidden={!userNameError}>{errorMsg}</span>
            <div className="row">
            <label htmlFor="password">Password</label> 
            <InputText value={password} onChange={onChangePassword} />
            </div>
            <span className="errorMsg" hidden={!passwordError}>{errorMsg}</span>
            <div className="row">
            <Button label="Login" onClick={handleLogin}/>
            </div>
        </div>
        <div className="register" hidden={register}>
            <h2>Register</h2>
            <div className="row">
            <label htmlFor="firstName">First Name</label> 
            <InputText id="firstName" value={firstName} onChange={onChangeFirstName} />
            </div>
            <span className="errorMsg" hidden={!firstNameError}>{errorMsg}</span>
            <div className="row">
            <label htmlFor="lastName">Last Name</label> 
            <InputText id="lastName" value={lastName} onChange={onChangeLastName} />
            </div>
            <span className="errorMsg" hidden={!lastNameError}>{errorMsg}</span>
            <div className="row">
             <label htmlFor="username">Username</label> &nbsp;
            <InputText id="username" value={userName} onChange={onChangeUserName} />
            </div>
            <span className="errorMsg" hidden={!userNameError}>{errorMsg}</span>
            <div className="row">
            <label htmlFor="password">Password</label>
            <InputText value={password} onChange={onChangePassword} />
            </div>
            <span className="errorMsg" hidden={!passwordError}>{errorMsg}</span>
            <div className="row">
            <Button label="Register" onClick={handleSubmit}/>
            </div>
        </div>
        </div>
    )
}
        