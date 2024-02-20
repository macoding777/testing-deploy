import {Navigate} from "react-router-dom";

const Logout = ()=>{
//     remove all localstorage
    localStorage.clear();
    return <Navigate to={"/auth/login"}/>
}


export default Logout;