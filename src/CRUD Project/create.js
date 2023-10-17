import React ,{useState}from 'react'
import { Form,Button} from 'semantic-ui-react';
import {Api_Url} from '../Constant/URL';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Create() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
    
  async  function insertData(){
    await  axios.post(Api_Url,{
         name,
         email
  })
      if(name && email){
        navigate('/read')
      }
      else{
        alert('enter the field');
      }
    }
    
  return (
    <Form className='form'>
     <Form.Field>
        <label className='name'>Name</label>
        <input value={name} className= 'input' onChange ={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
     </Form.Field>
     <br/>
     <Form.Field>
         <label className='name'>Email</label>
         <input  value={email} onChange ={(e) => setEmail(e.target.value)} className= 'input' placeholder='Enter your email'/>
     </Form.Field>
     <br/>
     <Button className='submit' onClick={insertData}>Create</Button>
     
    </Form>
  )
}

export default Create
