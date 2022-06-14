import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { reducer } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
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
import CartPage from "./pages/CartPage";
import SingleCourse from "./pages/SingleCourse";
import React, { useContext } from "react";
import AuthContext from "./store/auth-context";

const store = configureStore({
  reducer: reducer,

  // middleware: getDefaultMiddleware => [...getDefaultMiddleware({
  //   serializableCheck: false,

  // }), logger],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),



});
const persistor = persistStore(store);
function App() {

  const ctx = useContext(AuthContext);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div></div>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
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
          <Routes>
            <Route
              path='/dashboard/courses'
              element={ctx.isLoggedIn &&
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
      </PersistGate>
    </Provider>
  );
}

export default App;
