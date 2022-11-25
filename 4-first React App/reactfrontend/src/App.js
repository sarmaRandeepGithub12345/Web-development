
import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
function App() {

const [students, studentHook] = useState([])

useEffect(()=>{

const getStudents = async()=>{

  const result = await axios.get('http://localhost:8000/api/student')
  console.log(result.data)
 
  studentHook(result.data) 
 
}
getStudents()

},[])

  return (
    <>
      {
        students.map((el,index)=>{
          console.log(el.name)
          return <h3 key={index}>Name: {el.name}  , Age: {el.age}, Fees: {el.age}</h3>
        })
      }
    </>
  )
}

export default App;
