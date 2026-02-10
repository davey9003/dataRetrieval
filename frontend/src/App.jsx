import React from "react"
import { useState } from "react";
import { useEffect } from "react";


function App(){
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3006/customers")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  },[])

  return (
    <div>
      <h1>Data Retrieval</h1>
    <div style={{padding: "50px"}}>
      <table>
        <thead>
          <th>ID</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.customer_id}</td>
              <td>{d.first_name +" "+ d.last_name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default App;