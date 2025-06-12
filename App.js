import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

import {app} from "./firebase"
import './App.css';
import SignupPage from "./Pages/signup";
import SigninPage from "./Pages/signin";


const auth = getAuth(app);
function App() {
   

  const signupUser=()=>{
         createUserWithEmailAndPassword(auth, "prajaktashidoreeeeeeee@gmail.com", "Prajakta@12" ).then((value)=>console.log(value));
  };
  
  return (
    <div className="App">
      <SignupPage/>
      <SigninPage/>
    </div>
  );
}

export default App;
