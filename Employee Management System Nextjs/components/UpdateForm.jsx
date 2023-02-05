import React from 'react'
import format from 'date-fns/format'
import { useRouter } from 'next/router'
const UpdateForm = ({ data }) => {
    const router = useRouter()
    const str=data.name;
    let fName="",lName="";
    let s=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
            s=1;
        }else if(s===0)
        fName+=str[i]
        else if(s===1){
        lName+=str[i];
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
    
        const actualData = {
            name: `${d.get('firstName')} ${d.get('lastName')}`,
            email: d.get('email'),
            salary: d.get('salary'),
            date: d.get('date'),
            status: d.get('status'),
            avatar: d.get('avatar')
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(actualData)
        };
        //console.log(data._id)
        const response = await fetch(`http://localhost:3000/api/${data._id}`, requestOptions)
       router.push('/')
    }
    return (
        <div>
            <form className="container flex flex-col" onSubmit={handleSubmit}>
                <div className="input border-black border-2">
                    <input className="border-black border-1" type="text" name="firstName" id="firstName" placeholder="First Name" defaultValue={ fName } />
                </div>
                <div className="input border-black border-2">
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" defaultValue={ lName } />
                </div>

                <div className="input border-black border-2">
                    <input type="text" name="email" id="email" placeholder="Email" defaultValue={data.email} />
                </div>
                <div className="input border-black border-2">
                    <input type="text" name="salary" id="salary" placeholder="Salary" defaultValue={data.salary} />
                </div>
                <div className="input border-black border-2">
                    <input type="date" name="date" id="date" defaultValue={format(new Date(data.date), 'yyyy-MM-dd')} />
                </div>
                <div className="input flex flex-row">
                    <div className="button1 border-2 border-green-500 cursor-pointer">
                        <input type="radio" name="status" id="active" value="Active" defaultChecked />
                        <label htmlFor="active" checked>Active</label>
                    </div>

                    <div className="button2 border-2 border-green-500 cursor-pointer">
                        <input type="radio" name="status" id="inactive"
                            value="Inactive" />
                        <label htmlFor="inactive">Inactive</label>
                    </div>
                </div>

                <div className="input border-black border-2">
                    <input type="text" name="avatar" id="avatar" placeholder="Avatar" defaultValue={data.avatar} />
                </div>

                <div className="submit" >
                    <input type="submit" value='Submit' id="submit" className="border-2 border-green-500 cursor-pointer" />
                </div>
            </form>
        </div>
    )
}

export default UpdateForm