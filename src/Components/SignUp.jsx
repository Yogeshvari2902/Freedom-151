import React, { useState } from 'react';
function SignUp() {
    const [user,setUser]=useState();

    function userDetails(e){
        const{value,name}=e.target;
        setUser({...user,[name]:value})
    }

    async function postUser(e){
            e.preventDefault();
           let a= await fetch(`http://localhost:8080/user`,{
            method:"POST",
            headers:{
              "content-type":"application/json",
            },
            body:JSON.stringify(user),
          })

          alert("successfully registered");
    }
    return (
        <div >
            <form style={{display:"grid",width:"30%",margin:"auto",paddingTop:"10px"}} onSubmit={postUser}>
            <input placeholder='Name' name="name"   onChange={userDetails}/><br/>
            <input placeholder='Age' name="age"  onChange={userDetails}/><br/>
            <input  placeholder='Gender' name='gender'  onChange={userDetails}/><br/>
            <input placeholder='Country'  name="country"  onChange={userDetails}/><br/>
            <input placeholder='Profession' name='profession'  onChange={userDetails}/><br/>
            <button >Submit</button>
            </form>    
        </div>
    );
}

export default SignUp;