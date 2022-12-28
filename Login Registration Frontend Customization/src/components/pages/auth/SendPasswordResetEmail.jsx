import { Grid , TextField , Button , Box ,Alert} from '@mui/material'
import { useState } from 'react'
const SendPasswordResetEmail = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ''
      })
      const handleSubmit = (e) => {
        e.preventDefault()//prevent the form getting submitted
        const data = new FormData(e.currentTarget)
        const actualData = {
          email: data.get('email'),
          
        }
        //console.log(actualData)
        if (actualData.email) {
          console.log(actualData)
          document.getElementById('password-reset-email-form').reset()
          setError({ status: true, msg: "Password Reset Email Sent", type: 'success' })
         
        } else {
          //console.log("All fields are required")
          setError({ status: true, msg: "Please, provide your email", type: 'error' })
        }
      }
    return (
    <>
    <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
      <Box component='form' noValidate
        sx={{ m: 2 }} id="password-reset-email-form" onSubmit={handleSubmit}>
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

export default SendPasswordResetEmail