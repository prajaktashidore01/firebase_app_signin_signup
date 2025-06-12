import React,{useState} from "react";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "../firebase";


const auth=getAuth(app);

const SignupPage=()=>{
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");


    const createUser=()=>{
          createUserWithEmailAndPassword(auth,email,password).then(value =>alert('Success'));
    };

  return(
     <div className="signup-page">
        <h1>Signup Page</h1>
        <label>Email</label>
        <input onChange={e =>setemail(e.target.value)} value={email}type="email" required placeholder="Enter your email here" />
        <label>Password</label>
        <input onChange={e =>setpassword(e.target.value)} value={password}type="password" required placeholder="Enter your password here"/>
        <button onClick={createUser}>SignUp</button>
     </div>
  );
};

export default SignupPage;