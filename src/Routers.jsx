import {createBrowserRouter, Navigate} from "react-router-dom";
import LoginPages from "./Pages/Auth/Login";
import Test from "./Pages/Test";
import ProtectedRoute from "./Middlewares/CheckAuth";
import NotePages from "./Pages/Signup";
import ErrorsPage from "./Pages/Errors.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import RegisterPage from "./Pages/Auth/Register.jsx";
import DashboardLayout from "./Layout/DashboardLayout.jsx";
import Logout from "./Pages/Auth/Logout.jsx";
import Home from "./Pages/Dashboard/home.jsx";


const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorsPage/>,
        element: <>
            <Navigate to={"/auth/login"}/>
        </>,
    }, {
        path: "Logout",
        element: <Logout/>
    },
    {
        path: "dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "dashboard/apa",
                element: <div>Bener</div>
            },
            {
                path: "monitoriot",
                element: <div>Bener</div>
            },
            {
                path: "note/:id",
                element: <NotePages/>
            }
        ]
    }
    ,
    {
        path: "auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "",
                element: <>
                    <Navigate to={"/auth/login"}/>
                </>
            },
            {
                path: "register",
                element: <RegisterPage/>,
            },
            {
                path: "login",
                element: <LoginPages/>,
            }
        ],
    },
]);

export default BrowserRouter;
