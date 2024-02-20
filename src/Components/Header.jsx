const Header = ()=>
{
   return <>
       <div className="header">

           <div className="header-left active">
               <a href="index.html" className="logo">
                   <img src="/assets/img/logo.png" alt=""/>
               </a>
               <a href="index.html" className="logo-small">
                   <img src="/assets/img/logo-small.png" alt=""/>
               </a>
               <a id="toggle_btn" href="javascript:void(0);">
               </a>
           </div>

           <a id="mobile_btn" className="mobile_btn" href="#sidebar">
                <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
           </a>

           <ul className="nav user-menu">






               {/*<li className="nav-item dropdown">*/}
               {/*    <a href="javascript:void(0);" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">*/}
               {/*        <img src="/assets/img/icons/notification-bing.svg" alt="img"/> <span*/}
               {/*        className="badge rounded-pill">4</span>*/}
               {/*    </a>*/}
               {/*    <div className="dropdown-menu notifications">*/}
               {/*        <div className="topnav-dropdown-header">*/}
               {/*            <span className="notification-title">Notifications</span>*/}
               {/*            <a href="javascript:void(0)" className="clear-noti"> Clear All </a>*/}
               {/*        </div>*/}
               {/*        */}
               {/*        <div className="topnav-dropdown-footer">*/}
               {/*            <a href="activities.html">View all Notifications</a>*/}
               {/*        </div>*/}
               {/*    </div>*/}
               {/*</li>*/}

               {/*<li className="nav-item dropdown has-arrow main-drop">*/}
               {/*    <a href="javascript:void(0);" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">*/}
               {/*         <span className="user-img"><img src="/assets/img/profiles/avator1.jpg" alt=""/>*/}
               {/*             <span className="status online"></span></span>*/}
               {/*    </a>*/}
               {/*    <div className="dropdown-menu menu-drop-user">*/}
               {/*        <div className="profilename">*/}
               {/*            <div className="profileset">*/}
               {/*                 <span className="user-img"><img src="/assets/img/profiles/avator1.jpg" alt=""/>*/}
               {/*                     <span className="status online"></span></span>*/}
               {/*                <div className="profilesets">*/}
               {/*                    <h6>John Doe</h6>*/}
               {/*                    <h5>Admin</h5>*/}
               {/*                </div>*/}
               {/*            </div>*/}
               {/*            <hr className="m-0"/>*/}
               {/*            <a className="dropdown-item" href="profile.html"> <i className="me-2"*/}
               {/*                                                                 data-feather="user"></i> My*/}
               {/*                Profile</a>*/}
               {/*            <a className="dropdown-item" href="generalsettings.html"><i className="me-2"*/}
               {/*                                                                        data-feather="settings"></i>Settings</a>*/}
               {/*            <hr className="m-0"/>*/}
               {/*            <a className="dropdown-item logout pb-0" href="signin.html"><img*/}
               {/*                src="/assets/img/icons/log-out.svg" className="me-2" alt="img"/>Logout</a>*/}
               {/*        </div>*/}
               {/*    </div>*/}
               {/*</li>*/}
           </ul>


           {/*<div className="dropdown mobile-user-menu">*/}
           {/*    <a href="javascript:void(0);" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"*/}
           {/*       aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>*/}
           {/*    <div className="dropdown-menu dropdown-menu-right">*/}
           {/*        <a className="dropdown-item" href="profile.html">My Profile</a>*/}
           {/*        <a className="dropdown-item" href="generalsettings.html">Settings</a>*/}
           {/*        <a className="dropdown-item" href="signin.html">Logout</a>*/}
           {/*    </div>*/}
           {/*</div>*/}
       </div>
   </>
}

export default Header;