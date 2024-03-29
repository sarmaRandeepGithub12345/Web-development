import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from 'scenes/navbar'
import UserWidget from 'scenes/widgets/UserWidget'
const HomePage = () => {
const isNonMobileScreens = useMediaQuery("(min-width:1000px)")
const {_id,picturePath} = useSelector((state)=>state.user)

  return (
    <Box>
<Navbar />
<Box
width="100%"
padding="2rem 6%"
display={isNonMobileScreens ? "flex":"block"}
gap="0.5rem"
justifyContent="space-between"
>
  <Box flexBasis={isNonMobileScreens ? "26%":undefined}></Box>
 <UserWidget></UserWidget>
</Box>
    </Box>
  )
}

export default HomePage