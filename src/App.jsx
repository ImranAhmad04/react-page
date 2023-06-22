import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from "./list.json"
function App() {
  const [count, setCount] = useState(0)
  const users = [
    {
      name:"imran ahmed",
      age:"19",
      phones:[
        {home:"013...."},
        {phones:"014..."}
      ]
    },
    {
      name:"imran hossain",
      age:"21",
      
      phones:[
        {home:"019...."},
        {phone:"017..."}
      ]
    }
  ]
  return (
    <>
      <h1>Nested Mapping</h1>
      {users.map((user , index) => {return <div key={index}>
        <h3> fulname: {user.name}</h3>
         <p>age:{user.age}</p> 
       {user.phones.map(( phone , index ) => <p key={index}>number:{phone.home}</p> )}  
      </div> }) }
    </>
  )
}

export default App
