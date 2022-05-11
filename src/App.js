import { Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';
import Navbar from './components/Header/Navbar';
import CourseDataTable from './Dashboard/components/dashboard-content/Data Table/CourseDataTable';
import Sidebar from './Dashboard/components/Sidebar';
import DashboardApp from './Dashboard/DashboardApp';
import Courses from './pages/Courses';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <>
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
    </>
    <>
      <Sidebar />
      <Routes>
      <Route
          path='/dashbord/courses'
          element={<CourseDataTable />}
          />
      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
