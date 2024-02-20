import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return <>
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li>
                            <NavLink to="/dashboard">
                                <img src="/assets/img/icons/dashboard.svg" alt="img"/>
                                <span>Daftar Absensi</span>
                            </NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink to="/profile">*/}
                        {/*        <img src="/assets/img/icons/users1.svg" alt="img"/>*/}
                        {/*        <span>Profile</span>*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <li>
                            <NavLink to="/logout">
                                {/*<img src="/assets/img/icons/log-out.svg" alt="img"/>*/}
                                <i className="fas fa-sign-out-alt"></i>
                                <span>Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}


export default Sidebar;