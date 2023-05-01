import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from "react-router-dom";
  
export default function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const Navigate = useNavigate();

  const getDetails = async (e)=>{
    e.preventDefault();

    // const {email,password} = data;
    const res = await fetch("/login",{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,password
      })
    })

    const data = await res.json();
    
    
    if(res.status === 400 || !data){
       window.alert("Invalid Credentials...");
    }
    else{
      
      window.alert("login SuccessFull.....")
      Navigate("/")
    } 
  }

  return (
    <>

       <div className='container jsContent ' >  
       <Form>
       <h3 className='text-primary m-3 fw-bolder  text-center ' onChange={(e)=>setEmail(e.target.value)}   >Login Form</h3>
      
      <Form.Group className="mb-3" id='signin_form' controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" name='email'  placeholder="Enter email" id='email'
        onChange={(e)=>setPassword(e.target.value)}
         />
      </Form.Group>

       
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'  placeholder="Password" id='password' />
      </Form.Group>

      
      <Button variant="primary" type="submit" name='signin' id='signin' onClick={getDetails} >
        Submit
      </Button>
      
    </Form>
    <div  >
      <img className='firimg' src="https://tse2.mm.bing.net/th?id=OIP.YI7Km4vkdP6uPjKTPe2cqgHaFj&pid=Api&P=0" alt="img" />
      <Nav.Link className='mx-3 text-center' href="/register">Being A User</Nav.Link>
      
      </div>
      
       </div>
    </>
  )
}
