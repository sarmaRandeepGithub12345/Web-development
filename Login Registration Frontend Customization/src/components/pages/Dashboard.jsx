import {Button , CssBaseline , Grid ,Typography} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ChangePassword from './auth/ChangePassword'
const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = (e)=>{
        console.log('Logout Clicked')
        navigate('/login')
    }
  return (
    <>
    <CssBaseline />
    <Grid container sx={{m:3}} justifyContent='center'>
        <Grid item sm={4} sx={{backgroundColor:'gray' ,p:5}}>
          <Typography variant='h5' >Email : sonam@gmail.com</Typography>
          <Typography variant='h6'>Name : Sonam</Typography>
          <Button 
           variant='contained' 
           color='warning' 
           size='large'
           onClick={handleLogout}
           sx={{mt:8}}>Logout</Button>
        </Grid>
        <Grid item sm={8}>
        <ChangePassword/> 
        </Grid>
    </Grid>
    </>
  )
}

export default Dashboard