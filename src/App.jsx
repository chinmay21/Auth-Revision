import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoute from './components/auth/ProtectedRoute'
import StudentDashboard from './pages/StudentDashboard'
import InstructorDashboard from './pages/InstructorDashboard'
import AuthRedirect from './components/auth/AuthRedirect'

function App() {

  return (
    <BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        pauseOnHover
        theme='light'
      />
      <Routes>
        <Route
          path='/'
          element={
            <AuthRedirect>
              <Home/>
            </AuthRedirect>
          }
        />

        <Route path='/signup' element={<Signup/>} />
        
        <Route
          path='/login'
          element={
            <AuthRedirect>
              <Login/>
            </AuthRedirect>
          }
        />

        <Route element={<ProtectedRoute allowedRoles={['student']}/>}>
          <Route path='/dashboard/student' element={<StudentDashboard/>}/>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['instructor']}/>}>
          <Route path='/dashboard/instructor' element={<InstructorDashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
