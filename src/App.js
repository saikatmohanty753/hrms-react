import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard  from './pages/dashboard/Dashboard';
import Login from './pages/users/Login';
import Navbar from './pages/elements/Navbar';
import Sidebar from './pages/elements/Sidebar';
import Footer from './pages/elements/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/login' replace={true} />} />
      </Routes>
      <Routes>
        <Navbar/>
        <Sidebar/>
          <Route path='/' element={<Dashboard/>} />
        <Footer />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
