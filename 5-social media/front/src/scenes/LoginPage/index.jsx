import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form.jsx";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  
  return (
    <Box /* sx={{
      "& .MuiBox-root":{
        height:"10px"
      }
    }} */
   
    >
      
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
         /* sx={{
          "& .MuiTypography-root":{
            height:"120px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }
        }}  */
        /* sx={{
          height:"130px"
        }} */
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocioPedia
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }} 
         //styles="height:1300px"   
         > 
          Welcome to SocioPedia , The Social Media for Sociopaths
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
