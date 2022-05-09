import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';
import Navbar from './components/Header/Navbar';
import DashboardApp from './Dashboard/DashboardApp';
import Courses from './pages/Courses';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route
        path='/'
        element={<HomePage />}
        />
        <Route
        path='/dashboard'
        element={<DashboardApp />}
        />
        <Route
        path='/courses'
        element={<Courses />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
