import UpdateForm from "@/components/UpdateForm";

const Update = ({data}) => {
  //console.log(data)
  return (
    <div>
       <UpdateForm data={data}/> 
    </div>
  )
}

export const getServerSideProps =async({query})=>{
    const {id}=query
    //console.log(id)
    //sending get request for particular user from backend
    const response = await fetch(`http://localhost:3000/api/${id}`)
    const data = await response.json()
    //console.log(response)
     return {
      props:{
        data
         }
     }
  } 

export default Update