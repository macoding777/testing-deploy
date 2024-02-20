import {Outlet} from "react-router-dom";


const AuthLayout = () => {
    return <>
        <div className="account-page">
        <div className="main-wrapper">
            <div className="account-content">
                <div className="login-wrapper">
                    <div className="login-content">
                        <Outlet/>
                    </div>
                    <div className="login-img">
                        <img src="/assets/img/login.jpg" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
}


export default AuthLayout;

