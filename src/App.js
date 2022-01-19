import React, { useState } from "react";

function App() {

  const [obj,setobj] = useState([
    {name:'Hasnain Raza', age : 26 , education: 'BS Hons' , id: 0},
    {name:'Sajjad', age : 36 , education: 'B.A Commerce' , id: 1},
    {name:'Sammer', age : 28 , education: 'Matriculation', id:2},
    {name:'Salman', age : 20 , education: 'Middle Pass' , id: 3},
  ])
 

const handleDelete = (id)=>{

  const newdata = obj.filter(objs => objs.id !== id);

  setobj(newdata)
  console.log(newdata)
}

  return (

    <div>
  {
    obj.map((v,i)=>{
return(
  <div key={i}>
  <div style={{backgroundColor : '#eeeeee'}}>
<hr />
        <div>Name: {v.name}</div>
        <div>Education: {v.education}</div>
        <div>Age: {v.age}</div>
        <br />
        <br />
        <button onClick={()=>handleDelete(v.id)}>Delete</button>
  </div>
  <hr />
  </div>
        )
      }
    )
  }
 
    </div>
  );
}

export default App;
