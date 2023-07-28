import { useState,useEffect} from 'react';

import {Button} from "react-bootstrap";

import axios from "axios";

export default function Create(){
    
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState();
    
     let [data, setData] = useState();
    
         let url = "http://localhost:4000/signin";
    
const postproducts=async(data)=>{
   
      alert (` Login sucessfully `)
      
       
      setName("")
        setEmail("")
        setPassword("")
    
    var post={"data":{
           "name":name,
           "email":email,
           "password":password
          }}
           const res = await (axios.post(url,post))
          console.log(res.data.name)
          }
          return(
<>
<div className='div1' >
<div className="div2">
<center>
<form  onSubmit={postproducts} className="Registerform"> 
    <h1 id="head2">Login</h1>
      
        <label className='label2'>Email:</label>&nbsp;&nbsp; <input type="text" id="input2"  value={email}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder='Enter your Email' required/><br /><br />
        <label className='label3'>Password:</label>&nbsp;&nbsp;<input type="password"  pattern=".{8,}" id="input3" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter the Password' name="password" required/><br /><br />
      
    <Button type="submit"  className="create" disabled={!name && !email &&!password} ><b>Login</b></Button>
     
    
  </form>
    
     </center>
    </div>
    </div>
        </> 
        )}