import { Fragment } from 'react';
import CourseDataTable from './dashboard-content/Data Table/CourseDataTable';
import Sidebar from "./Sidebar"

const Dashboard = () => {


    return (
        <Fragment>
                <Sidebar />
                <CourseDataTable />
        </Fragment>
    )
}

export default Dashboard;