import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/LoginPage/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Shared/Navbar';
import AddExperiences from './Pages/Dashboard/AddExperiences';
import AddHomes from './Pages/Dashboard/AddHomes';
import RootContainer from './Containers/RootContainer';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<RootContainer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-experience" element={<AddExperiences />} />
        <Route path="/add-homes" element={<AddHomes />} />
      </Routes>
    </>
  );
}

export default App;
