import axios from "axios"
import { useEffect, useState } from "react"



const App = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/users")
    .then(res=>res.json())
    .then(data=>setdata(data))
  
  
  }, [data])
  const deleteData=function(id){
    axios.delete(`http://localhost:8000/users/${id}`)
   
  }

  return (
    <div>
    <table border={2}>
         <thead>
         <tr>
          <th>id</th>
         <th>First Name</th>
         <th>Age</th>
         <th>Email</th>
         <th>delete</th>
        
         </tr>
         </thead>
 
         <tbody>{
          data.map(item=>{
            return(
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td className="deleteBtn"><button onClick={()=>deleteData(item.id)}>X</button></td>
             </tr>
            )
          })
}
         </tbody>
       </table>
     </div>
   
  )
}

export default App


 

