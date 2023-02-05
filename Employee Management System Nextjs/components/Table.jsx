import React from 'react'
import { BiBox, BiEdit } from "react-icons/bi";
import Router from 'next/router';
import { format } from 'date-fns'
import Link from 'next/link';
/* import { useGetAllUsersQuery } from '@/services/apiSlice'; */
const Table = ({ data }) => {
  

  
  return (
    <>
      <table className='w-screen'>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>

            <th>Email</th>
            <th>Salary</th>
            <th>D.O.B</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>



          {data.map((user, id) => (

            <tr key={id}>

              <td>
                <div className='flex  items-center justify-center'>
                  <img src={`${user.avatar}`} alt="pic1" className='h-10 w-10 rounded-full' />
                </div>
              </td>
              <td className='text-center'>{user.name}</td>
              <td className='text-center'>{user.email}</td>
              <td className='text-center'>{user.salary}</td>
              <td className='text-center'>{format(new Date(user.date), 'dd-MM-yyyy')}</td>
              <td className='text-center'><div className={`border-2 border-${user.status==='Active'?"red":"green"}-500`}>{user.status}</div></td>
              <td>
                <div className='flex  items-center justify-center' >
                  <div onClick={async (e)=>{
                    //console.log(user._id)
                    const response = await fetch(`http://localhost:3000/api/${user._id}`,{
                      method:'DELETE'
                    })
                    Router.reload()

                  }} >

                    <BiBox className='text-red-500 cursor-pointer'

                    ></BiBox>
                  </div>
                  <div >
                    <a href={`http://localhost:3000/${user._id}`}>
                    <BiEdit className='text-green-500 cursor-pointer'  

                    ></BiEdit>
                    </a>
                  </div>
                </div>
              </td>

            </tr>

          ))
          }

        </tbody>
      </table>
    </>
  )
}



export default Table