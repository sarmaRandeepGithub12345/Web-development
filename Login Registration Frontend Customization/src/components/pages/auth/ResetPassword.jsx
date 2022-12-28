import { Grid , TextField , Button , Box ,Alert} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const [error, setError] = useState({
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
          console.log(actualData)
          if(actualData.password === actualData.password_confirmation){
            document.getElementById('password-reset-form').reset()
            setError({ status: true, msg: "Password Reset Successful", type: 'success' })
          setTimeout(() => {
            navigate('/login')
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
     <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
      <h1>Reset Password</h1>
      <Box component='form' noValidate
        sx={{ m: 2 }} id="password-reset-form" onSubmit={handleSubmit}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='password'
          name='password'
          type='password'
          label='New Confirm Password'
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
            Send
          </Button>
        </Box>
     
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Box>  
      
      </Grid>  
    </Grid>  
    </>
  )
}

export default ResetPassword