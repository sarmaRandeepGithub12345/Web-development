import { useState } from 'react'
import { TextField, Button, Box, Alert, FormControlLabel ,Checkbox} from '@mui/material'
import { NavLink ,useNavigate} from 'react-router-dom'

const Registration = () => {
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
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      tc:data.get('tc')
    }
    //console.log(actualData)
    if (actualData.email && actualData.password && actualData.name && actualData.password_confirmation && actualData.tc) {
      //console.log(actualData)
      if(actualData.password ===actualData.password_confirmation){
      document.getElementById('registration-form').reset()
      setError({ status: true, msg: "Registration Successful", type: 'success' })
      navigate('/dashboard')
      }else{
      setError({ status: true, msg: "Password and confirm password does not match", type: 'error' })  
      }
    } else {
      //console.log("All fields are required")
      setError({ status: true, msg: "All fields are needed", type: 'error' })
    }
  }  
  return (
    <>
    <Box component='form' noValidate
      sx={{ m: 2 }} id="registration-form" onSubmit={handleSubmit}>
      <TextField
        margin='normal'
        required
        fullWidth
        id='name'
        name='name'
        label='Name'
        //sx={{m:2}}//works
        autoFocus
      />
      <TextField
        margin='normal'
        required
        fullWidth
        id='email'
        name='email'
        label='Email Address'
      />
      <TextField
        margin='normal'
        required
        fullWidth
        id='password'
        name='password'
        label='Password'
        type='password'
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
      <FormControlLabel control={<Checkbox value='agree' color='primary' name='tc' id='tc'/>} 
      label="I agree to terms and condition"
      >

      </FormControlLabel>
      <Box
        textAlign='center'//places the component in the center of the X axis
      >
        <Button
          type='submit'
          variant='contained'
          sx={{ mt: 3, mb: 2, px: 5 }}
        >
          Join
        </Button>
      </Box>
      
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
  </>
  )
}

export default Registration