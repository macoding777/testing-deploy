import Header from "../Components/Header.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import {Outlet} from "react-router-dom";

const dashboardLayout = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <Outlet/>
        </>
    )
}

export default dashboardLayout;