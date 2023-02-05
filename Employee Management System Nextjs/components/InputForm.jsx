import Router from "next/router";

const InputForm = () => {

const handleSubmit=async(e)=>{
e.preventDefault();
const data = new FormData(e.currentTarget);

const actualData = {
    name: `${data.get('firstName')} ${data.get('lastName')}`,
    email:data.get('email'),
    salary:data.get('salary'),
    date: data.get('date'),
    status:data.get('status'),
    avatar:data.get('avatar')
} 
const response = await fetch(`http://localhost:3000/api/users`,{
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(actualData)
})
Router.reload()
}
    return (
        <form className="container flex flex-col" onSubmit={handleSubmit}>
            <div className="input border-black border-2">
                <input className="border-black border-1" type="text" name="firstName" id="firstName" placeholder="First Name" />
            </div>
            <div className="input border-black border-2">
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
            </div>
            
            <div className="input border-black border-2">
                <input type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input border-black border-2">
                <input type="text" name="salary" id="salary" placeholder="Salary" />
            </div>
            <div className="input border-black border-2">
                <input type="date" name="date" id="date" />
            </div>
            <div className="input flex flex-row">
                <div className="button1 border-2 border-green-500">
                    <input type="radio" name="status" id="active" value="Active"/>
                    <label htmlFor="active">Active</label>
                </div>

                <div className="button2 border-2 border-green-500">
                    <input type="radio" name="status" id="inactive"
                    value="Inactive" />
                    <label htmlFor="inactive">Inactive</label>
                </div>
            </div>
            
            <div className="input border-black border-2">
                <input type="text" name="avatar" id="avatar" placeholder="Avatar" />
            </div>  

            <div className="submit" >
                <input type="submit" value='Submit' id="submit" className="border-2 border-green-500 cursor-pointer" />
            </div>
        </form>
    )
}

export default InputForm