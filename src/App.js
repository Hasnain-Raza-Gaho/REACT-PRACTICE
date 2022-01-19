import React, { useState } from "react";

function App() {

  const [obj,setobj] = useState([
    {name:'Hasnain Raza', age : 26 , education: 'BS Hons' , id: 1},
    {name:'Sajjad', age : 36 , education: 'B.A Commerce' , id: 2},
    {name:'Sammer', age : 28 , education: 'Matriculation', id: 3},
    {name:'Salman', age : 20 , education: 'Middle Pass' , id: 4},
  ])
 

  return (
    <div>
 <ul>
   {obj.map(obj => (
     <div key={obj.id}>
     <li>{obj.name}</li>
     <li>{obj.education}</li>
     <br />
     </div>
     
   ))}
 </ul>
    </div>
  );
}

export default App;
