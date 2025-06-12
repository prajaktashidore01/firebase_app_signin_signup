import React,{useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";


const auth = getAuth(app);

const SigninPage =()=>{
    const[email,setemail]=useState("");
        const[password,setpassword]=useState("");

        const sigininuser=()=>{
            signInWithEmailAndPassword (auth,email,password).then((value)=>console.log("signin success")).catch((err)=>console.log(err));
        };
  return (
    <div className="signin-page">
        <h1>Signin Page</h1>
        <label>Enter your email</label>
        <input onChange={e =>setemail(e.target.value)} value={email} type="email" placeholder="Enter your email here"/>
        <label>Enter your password</label>
        <input onChange={e =>setpassword(e.target.value)} value={password} type="password" placeholder="Enter your password here"/>
        <button onClick={sigininuser}>Signin me in</button>
            </div>
  );
};

export default SigninPage;