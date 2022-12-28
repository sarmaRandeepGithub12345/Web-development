import { AppBar , Box,Toolbar ,Typography ,Button } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
const theme = createTheme({
    palette: {
        primary: {
            main: '#536dfe',
          },
      
    },
  });

const Navbar = () => {
  return (
    <>
     <Box sx={{flexGrow:1}}>
       <AppBar position='static' theme={theme}>
         <Toolbar >
            <Typography variant='h5' component='div' sx={{flexGrow:1,fontFamily: 'cursive', color:'yellow'}} >
               Geek-Shop
            </Typography>
            <Button 
            //textColor='warning.dark' //does not work 
            component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? '#00008B' : '' }}} sx={{ color:'black' , textTransform:'none' ,ml:1 ,fontSize:19, fontFamily:'cursive'}} to='/'>Home</Button>
            <Button component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? '#00008B' : '' }}} sx={{color:'black' , textTransform:'none' ,ml:1 ,fontSize:19, fontFamily:'cursive'}} to='/contact'>Contact</Button>
            <Button component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? '#00008B' : '' }}} sx={{color:'black' , textTransform:'none' ,ml:1 ,fontSize:19, fontFamily:'cursive'}} to='/login'>Log/Reg</Button>

         </Toolbar>
       </AppBar>
     </Box>
    </>
  )
}

export default Navbar