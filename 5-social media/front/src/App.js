import { BrowserRouter, Navigate, Routes, Route, Form } from 'react-router-dom'
import HomePage from 'scenes/homePage'
import LoginPage from 'scenes/LoginPage'
import ProfilePage from 'scenes/profilePage'
/* import Form2 from 'Form2'
 */

//useMemo caches the value so that functions are not run again and again during eevry render
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from 'theme'
function App() {

  //Getting the "mode" from the state
  const mode = useSelector((state) => state.mode);

  //sending the mode to theme.js for correct colors to be delivered in case the screen mode is "dark" or "light"
  
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
 const isAuth = Boolean(useSelector((state)=>state.token))

  return (
    <div className="app">
      <BrowserRouter>

        {/* passing the theme to that colors are assigned according to the screen mode */}
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage />: <Navigate to="/" />} />
            <Route path="/profile/:userId" element={isAuth ?<ProfilePage />:<Navigate to="/" />} />
{/*             <Route path="/form" element={<Form2 />} />
 */}          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App