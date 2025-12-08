
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login"
import BookAppointment from "./pages/BookApointment"
import MyAppointments from "./pages/MyAppointments"
import Register from './pages/Register'
import AdminDashboard from './admin/AdminDashboard'
import AllDoctors from './admin/AllDoctors'
import AddDoctor from './admin/AddDoctor'
import AllAppointments from './admin/AllAppointments'
import DoctorForm from './components/DoctorForm'
import DoctorList from './components/DoctorList'
import Navbar from './components/Navbar';
import ManageDoctors from './admin/ManageDoctors'
import ManageAppointments from './admin/ManageAppointments'



function App() {


  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/book' element={<BookAppointment/>}/>
      <Route path='/appointments' element={<MyAppointments/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/add-doctor' element={<AddDoctor/>}/>
      <Route path='/all-doctors' element={<AllDoctors/>}/>
      <Route path='/all-appointment' element={<AllAppointments/>}/>
      <Route path='/admin/doctors' element={<ManageDoctors/>}/>
      <Route path='/admin/appointments' element={<ManageAppointments/>}/>
      <Route  path='/doctor-list' element={<DoctorList/>}/>
      <Route  path='/add-doctor-1' element={  <DoctorForm/>}/>
     
      
    </Routes>
    </BrowserRouter>
    <div>
     
    
      
     
    </div>
    
     
    </>
  )
}

export default App
