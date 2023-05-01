import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from "react-router-dom";


export default function Register() {
  const Navigate = useNavigate();

  const [user,setUser] = useState({
     name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })



    

    function handleInputs(e){
      setUser(e.target.value);
      const {name,value} = e.target;
        setUser({...user, [name]:value});
    }

    const postData = async  (e)=>{
      e.preventDefault();
      console.log("the data send successFully........")
      const {name,email,phone,work,password,cpassword} = user;

      const res = await fetch("/register",{
        method:'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,email,phone,work,password,cpassword
        })
      })
      const data = await res.json();
      if(!data){
         window.alert("data not send SuccessFulll.....")
         console.log("Invalid Credientials")
      }
      else{
         window.alert("Registration SuccessFull.......")
         Navigate("/")
      }

    }

  return (
    <>
    <div className='container  jsContent  ' >
    <Form  className='leftRight register-form' id='register-form' >
    <Form.Group className="mb-3 hw " controlId="formBasicEmail">
        <Form.Control type="text" name="name" id='name'
         value={user.name}
         onChange={handleInputs}
          placeholder="Enter Name" />
      </Form.Group>

    
      <Form.Group className="mb-3 hw "  controlId="formBasicEmail">
        <Form.Control type="email" name="email" id='email' placeholder="Enter email" value={user.email}
        onChange={handleInputs}
         />
      </Form.Group>

      <Form.Group className="mb-3 hw" >
        <Form.Control type="number"  placeholder="Phone Numeber" id='number' value={user.phone} name='phone'
        onChange={handleInputs}
         />
      </Form.Group>


      <Form.Group className="mb-3 hw" >
        <Form.Control type="text"  placeholder="Profession" name='work' id='work' value={user.work} 
        onChange={handleInputs}
        />
      </Form.Group>


      <Form.Group className="mb-3 hw" controlId="formBasicPassword">
        <Form.Control type="password" name='password' id='password'  placeholder="Password" value={user.password} 
          onChange={handleInputs}
        />
      </Form.Group>

      <Form.Group className="mb-3 hw" controlId="formBasicPassword">
        <Form.Control type="password"  placeholder="Confirm Password" name='cpassword' id='cpassword' value={user.cpassword}
        onChange={handleInputs}
         />
      </Form.Group>      
      <Button variant="primary" name='signup' id='signup' type="submit" onClick={postData} >
        Submit
      </Button>

    </Form>

    <div  >
      <img className='firimg' src="https://tse3.mm.bing.net/th?id=OIP.ATIxkM1pM96WKHpYBP1jagHaFj&pid=Api&P=0" alt="img" />
      <Nav.Link className='mx-3 text-center' href="/login">Already Login</Nav.Link>
      </div>


    </div>

    </>
  )
}



