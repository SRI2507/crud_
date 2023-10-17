import React,{useState,useEffect} from 'react'
import {Form,Button,FormField} from 'semantic-ui-react';
import axios from 'axios'
import { Api_Url} from '../Constant/URL';
import { useNavigate } from 'react-router-dom';

function Update() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [id,setId] = useState('');
    const navigate = useNavigate();
    
    useEffect(()=>{
     // setId(localStorage.getItem('id'))
      setName(localStorage.getItem('name'))
      setEmail(localStorage.getItem('email'))
      setId((localStorage.getItem('id')));
    },[])
     
    const UpdateCell = async () => {
      if(name && email){
        await axios.put(`${Api_Url}/${id}`,{
          name,
          email
         })
          navigate('/read')
         
      }
      else{
        alert('Enter the input value');
      }
      
     }
   
  return (
    <Form className='form'>
     <FormField>
        <label className='name'>Name:</label>
        <input value={name} className= 'input' onChange ={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
     </FormField>
     <br/>
     <FormField>
         <label className='name'>Email:</label>
         <input  value={email} onChange ={(e) => setEmail(e.target.value)} className= 'input' placeholder='Enter your email'/>
     </FormField>
     <br/>
     <Button className='update' onClick={UpdateCell}>Update</Button>
     
    </Form>
  )
}

export default Update
