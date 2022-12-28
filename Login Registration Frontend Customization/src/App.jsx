import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./components/pages/Contact"
import Home from "./components/pages/Home"
import Layout from "./components/pages/Layout"
import LoginReg from "./components/pages/auth/LoginReg"
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail"
import ResetPassword from "./components/pages/auth/ResetPassword"
import Dashboard from "./components/pages/Dashboard"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='login' element={<LoginReg/>}/>
            <Route path='sendpasswordresetemail' element={<SendPasswordResetEmail/>}/>
            <Route path='reset' element={<ResetPassword/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>

          </Route>
        <Route path='*' element={<h1>Error 404 Page not found</h1>}></Route>
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
