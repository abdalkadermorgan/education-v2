import Navbar from "../components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import DashboardApp from "../Dashboard/DashboardApp";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import CartPage from "../pages/CartPage";
import SingleCourse from "../pages/SingleCourse";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Site = () => {
    const ctx = useContext(AuthContext);

    <Routes>
        <Navbar />
            <Route
                path='/'
                element={<HomePage />}
            />
            <Route
                path='/dashboard'
                element={ctx.isLoggedIn && <DashboardApp />}
            />
            <Route
                path='/courses'
                element={<Courses />}
            />

            <Route
                path='/login'
                element={!ctx.isLoggedIn && <Login />}
            />

            <Route
                path='/cartpage'
                element={<CartPage />}
            />

            <Route
                path='course/:id'
                element={<SingleCourse />}
            />
        </Routes>
}

export default Site;