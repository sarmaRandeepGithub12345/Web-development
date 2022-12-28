
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box , Grid , Button ,TextField,Alert} from '@mui/material'

const ChangePassword = () => {
    const [error, setError] = React.useState({
        status: false,
        msg: "",
        type: ''
      })

    const navigate = useNavigate()  
      const handleSubmit = (e) => {

        e.preventDefault()//prevent the form getting submitted
        const data = new FormData(e.currentTarget)
        const actualData = {
          password: data.get('password'),
          password_confirmation : data.get('password_confirmation')
        }
        //console.log(actualData)
        if (actualData.password && actualData.password_confirmation) {
          //console.log(actualData)
          if(actualData.password === actualData.password_confirmation){
            document.getElementById('password-change-form').reset()
            setError({ status: true, msg: "Password Change Successful", type: 'success' })
          setTimeout(() => {
           
          }, 2000);

          }else{
           
            setError({ status: true, msg: "Password and Confirm Password does not match", type: 'error' })
  
          }
                  
        } else {
          //console.log("All fields are required")
          setError({ status: true, msg: "Both fields required", type: 'error' })
        }
      }     
  return (
    <>
    <Box sx={{ 
        display:'flex' ,
        flexDirection:'column', 
        flexWrap:'wrap',
        maxWidth: 600, 
        mx:4
        }}>
    <h1>Change Password</h1>        
   <Box component='form' 
        noValidate
        sx={{ m: 1 }} 
        id="password-change-form" 
        onSubmit={handleSubmit}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='password'
          name='password'
          type='password'
          label='New Password'
          //sx={{m:2}}//works
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='password_confirmation'
          name='password_confirmation'
          label='Confirm Password'
          type='password'
          //sx={{m:2}}//works
        
        />
        <Box
          textAlign='center'//places the component in the center of the X axis
        >
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Update
          </Button>
        </Box>
     
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Box>  
    </Box>
    
    </>
  )
}

export default ChangePassword