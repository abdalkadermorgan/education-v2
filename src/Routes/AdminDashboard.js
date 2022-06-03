import { useContext } from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Header/Navbar"
import CourseDataTable from "../Dashboard/components/dashboard-content/Data Table/CourseDataTable";
import InfographicDataTable from "../Dashboard/components/dashboard-content/Data Table/InfographicDataTable";
import SlideDataTable from "../Dashboard/components/dashboard-content/Data Table/SlideDataTable";
import Sidebar from "../Dashboard/components/Sidebar"
import AuthContext from "../store/auth-context";

const AdminDashboard = () => {
    const ctx = useContext(AuthContext);
    <Routes>
            <Navbar />
            <Sidebar />
            <Route
                path='/dashboard/courses'
                element={ctx.isLoggedIn &&
                    <CourseDataTable />
                }
            />
            <Route
                path='/dashboard/slide'
                element={
                    <SlideDataTable />
                }
            />

            <Route
                path='/dashboard/Infographic'
                element={
                    <InfographicDataTable />
                }
            />
        </Routes>

}

export default AdminDashboard;