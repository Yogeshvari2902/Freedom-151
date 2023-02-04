import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
const [user,setUser]=useState({email:"",password:""})
const {userAuth,loggedin}=useContext(AuthContext);

const handle=async(e)=>{
  e.preventDefault();
 let a= await fetch(`https://reqres.in/api/login`,{
  method:"POST",
  headers:{
    "content-type":"application/json",
  },
  body:JSON.stringify(user),
})
let b=await a.json();
console.log(b.token);
if(b.token)
loggedin(b.token);
}

if(userAuth.isAuth)
return <Navigate to="/data" />
  return (
    <div>
      <Navbar />
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" name="email" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
          </label>
        </div>
        <br/>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}
            />
          </label>
        </div>
        <div> 
          <input data-testid="form-submit" type="submit" value="SUBMIT" onClick={handle}/>
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
