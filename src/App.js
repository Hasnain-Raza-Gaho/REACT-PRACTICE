import React, { useState, useEffect } from "react";

function App() {


console.log('this is first')

const [ispending,setpending]= useState(false)

  const [obj,setobj] = useState([
    {name:'Hasnain Raza', age : 26 , education: 'BS Hons' , id: 0},
    {name:'Sajjad', age : 36 , education: 'B.A Commerce' , id: 1},
    {name:'Sammer', age : 28 , education: 'Matriculation', id:2},
    {name:'Salman', age : 20 , education: 'Middle Pass' , id: 3},
  ])


const handleDelete = (id)=>{
  setpending(true)
setTimeout(() => {
  
const newdata = obj.filter(objs => objs.id !== id);

  setobj(newdata)
  setpending(false)
}, 1000);
}

console.log(obj)


  return (

    <div>






      {ispending && <h1>Loading...</h1> }
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
 
      
        <button onClick={()=> setobj([
          {name:'Hasnain Raza', age : 26 , education: 'BS Hons' , id: 0},
          {name:'Sajjad', age : 36 , education: 'B.A Commerce' , id: 1},
          {name:'Sammer', age : 28 , education: 'Matriculation', id:2},
          {name:'Salman', age : 20 , education: 'Middle Pass' , id: 3},
        ])}>Add All Data Again</button>
    </div>
  );
}

export default App;
