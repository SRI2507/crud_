import React ,{useEffect,useState} from 'react'
import { Table,Button } from 'semantic-ui-react'
import axios from 'axios'
import { Api_Url } from '../Constant/URL';
import { useNavigate } from 'react-router-dom';

function Read() {
    const [apidata,setApi] = useState([]);
    const navigate = useNavigate();
    const UpdateCell = ({id,name,email}) => {
        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
         navigate('/update')
    }
    const deleteCell = async(id) =>{
        await axios.delete(`${Api_Url}/${id}`);

        Callapi();
     }
     const Callapi =  async () => {
     const resp = await axios.get(Api_Url)
     setApi(resp.data);
    }
    useEffect(()=>{
       Callapi();
    },[])
    function addItem(){
      navigate('/create')
    }
  return (
    <div className='table-view'>
    <Table singleLine className='table'>
      <Table.Header className='tablehead'>
        <Table.Row>
            <Table.HeaderCell className='tableheadercell'>Name</Table.HeaderCell>
            <Table.HeaderCell className='tableheadercell'>Email</Table.HeaderCell>
            <Table.HeaderCell className='tableheadercell'>Delete</Table.HeaderCell>
            <Table.HeaderCell className='tableheadercell'>Update</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body className='tablebody'>
        {apidata.map(data => (
        <Table.Row key={data.id} >
          <Table.Cell className='tablecell'>{data.name}</Table.Cell>
          <Table.Cell className='tablecell'>{data.email}</Table.Cell> 
          <Table.Cell className='tablecell'>
          <Button className='delete'onClick={()=>deleteCell(data.id)}>Delete</Button>
          </Table.Cell>
          <Table.Cell className='tablecell'>
          <Button className='update' onClick={()=>UpdateCell(data)}>Update</Button>
          </Table.Cell>
          
        </Table.Row>
        ))
        }
      </Table.Body> 
      
    </Table>
    <Button onClick={addItem} className='add'>Add</Button>
    </div>
  )
  
}

export default Read

