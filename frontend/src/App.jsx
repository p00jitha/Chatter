import {Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/Signup/Signup'
import { useAuthContext } from "./Context/AuthContext";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
function App() {
  const {authUser} = useAuthContext();
  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
				<Route path='/' element={ authUser ? <Home /> : <Navigate to={'/login'}/>} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/'/>:<SignUp />} />
        <Route path='/forgotpw' element= {< ForgotPassword/>} />
			</Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App
