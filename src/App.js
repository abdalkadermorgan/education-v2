import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';
import Navbar from './components/Header/Navbar';
import CourseDataTable from './Dashboard/components/dashboard-content/Data Table/CourseDataTable';
import InfographicDataTable from './Dashboard/components/dashboard-content/Data Table/InfographicDataTable';
import SlideDataTable from './Dashboard/components/dashboard-content/Data Table/SlideDataTable';
import Sidebar from './Dashboard/components/Sidebar';
import DashboardApp from './Dashboard/DashboardApp';
import Courses from './pages/Courses';
import HomePage from './pages/Home';
import Login from './pages/Login';

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

        <Route
        path='/login'
        element={<Login />}
        />
        
      </Routes>
      <Routes>
      <Route
          path='/dashboard/courses'
          element={
            <>
            <Sidebar />
            <CourseDataTable />
            </>
        }
          />
      <Route
          path='/dashboard/slide'
          element={
            <>
            <Sidebar />
            <SlideDataTable />
            </>
        }
          />

      <Route
          path='/dashboard/Infographic'
          element={
            <>
            <Sidebar />
            <InfographicDataTable />
            </>
        }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
