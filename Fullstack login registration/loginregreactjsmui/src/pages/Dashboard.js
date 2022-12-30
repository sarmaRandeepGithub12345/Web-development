import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { unsetUserToken } from '../features/authSlice';
const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");

    //To remove state data once we have logged out 
    dispatch(unsetUserToken({token:null}))
    dispatch(unsetUserInfo({name:"" , email:""}))

    removeToken('token')
    navigate('/login')
  }
  //get token from local storage
  const token = getToken()

  //console.log(token)
  const { data, isSuccess } = useGetLoggedUserQuery(token);

  //console.log(data) 
  const [userData, setuserData] = useState({
    email: "",
    name: ""
  })

  /*
  //Store data in local store 
  useEffect(() => {
    if (data && isSuccess) {
      setuserData({
        email: data.user.email,
        name: data.user.name,
      })
    }
   
  //Run only if there "data" is not empty 
  }, [data, isSuccess])
*/

//Store User Data in Redux Store 
const dispatch = useDispatch()
useEffect(()=>{
 if(data && isSuccess){
    dispatch(setUserInfo({
      email: data.user.email,
      name: data.user.name
    })) 
 }
},[data, isSuccess,dispatch])
//Getting data
const myData = useSelector( state => state.user)
console.log(myData)



return (<>
    <CssBaseline />
    <Grid container direction='column'>
      <Grid item sm={4} textAlign='center' sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
        <Typography variant='h5'>Email: {myData.email}</Typography>
        <Typography variant='h6'>Name: {myData.name}</Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={8}>
        <ChangePassword />
      </Grid>
    </Grid>
  </>)
};

export default Dashboard;
