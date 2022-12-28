import { useState } from 'react'
import { TextField, Button, Box, Alert } from '@mui/material'
import { NavLink ,useNavigate} from 'react-router-dom'

const Login = () => {
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
      email: data.get('email'),
      password: data.get('password')
    }
    //console.log(actualData)
    if (actualData.email && actualData.password) {
      console.log(actualData)
      document.getElementById('login-form').reset()
      setError({ status: true, msg: "Login Success", type: 'success' })
      navigate('/dashboard')
    } else {
      //console.log("All fields are required")
      setError({ status: true, msg: "All fields are needed", type: 'error' })
    }
  }
  return (
    <>
      <Box component='form' noValidate
        sx={{ m: 2 }} id="login-form" onSubmit={handleSubmit}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          name='email'
          label='Email Address'
          //sx={{m:2}}//works
          autoFocus
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
        <Box
          textAlign='center'//places the component in the center of the X axis
        >
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Login
          </Button>
        </Box>
        <NavLink to='/sendpasswordresetemail'>
          Forgot Password?
        </NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Box>
    </>
  )
}

export default Login