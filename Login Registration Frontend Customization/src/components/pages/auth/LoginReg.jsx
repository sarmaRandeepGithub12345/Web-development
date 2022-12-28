import { Grid, Card, Tabs, Tab, Box,Typography } from "@mui/material"
import Pic1 from '../../../images/shopping2.png'
import { useState } from "react";
import UserLogin from './UserLogin'
import Registration from "./Registration";
import { ShoppingBag } from "@mui/icons-material";

const TabPanel = (props)=>{
const {children,value, index} = props;
return (
    <div 
      role='tabpanel' 
      hidden={value!==index}>
      {
        value === index && (
            <Box>{children}</Box>
        )
      }
    </div>
)
}

const LoginReg = () => {
const [value, setvalue] = useState(0);    
const handleChange = (event , newValue) =>{
    setvalue(newValue)
}
//console.log({value})
    return (
        <>
            <Grid container sx={{ height: '100vh' }}>
                <Grid item 
                 lg={6} 
                 sm={5} 
                 //xs={0} //works
                 sx={{
                    //lg:6,//Does not work
                    //sm:5,//Does not work
                    backgroundImage: `url(${Pic1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: { xs: 'none', sm: 'block' }
                }}>
                </Grid>
                <Grid item lg={6} sm={7} xs={12}>
                    <Card sx={{ width: '100%', height: '100%' }}>
                        <Box sx={{ mx:3 , height:530}}>
                            <Box sx={{
                                borderBottom: 1,
                                borderColor: 'white',
                                borderWidth: 2
                            }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    textColor='secondary'
                                    indicatorColor="secondary">
                                    <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                    <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                < UserLogin />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                 <Registration />         
                            </TabPanel>
                        </Box>
                        <Box textAlign='center' sx={{mt:2}}>
                            <ShoppingBag sx={{color :'purple', fontSize: 100}}/>
                           <Typography variant='h5' sx={{fontWeight:'bold'}}>Geek-Shop</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default LoginReg