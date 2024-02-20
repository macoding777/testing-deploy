import {Link, Navigate, redirect, useNavigate} from "react-router-dom";
import {useState} from "react";

const LoginAuth = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const usernamebener = "izzam";
        const passwordbener = "izzam";
        if(email){
            console.log("berhasil login")
            localStorage.setItem("username", email);
            navigate("/dashboard")
        }
    }

    return <>
    <div className="login-userset">
        <div className="login-logo">
            <img src="/assets/img/logo.png" alt="img"/>
        </div>
        <div className="login-userheading">
            <h3>Sign In</h3>
            <h4>Aplikasi pemantau Absensi</h4>
        </div>
        <form  onSubmit={handleSubmit}>
            <div className="form-login">
                <label>Email</label>
                <div className="form-addons">
                    <input type="text" onChange={(e)=>{
                        setEmail(e.target.value);
                    }} placeholder="Enter your email address"/>
                    <img src="/assets/img/icons/mail.svg" alt="img"/>
                </div>
            </div>
            <div className="form-login">
                <label>Password</label>
                <div className="pass-group">
                    <input type="password" onChange={(e)=>{
                        setPassword(e.target.value);
                    }} className="pass-input"
                           placeholder="Enter your password"/>
                    <span className="fas toggle-password fa-eye-slash"></span>
                </div>
            </div>
            <div className="form-login">
                {/*<a className="btn btn-login" href="index.html">Sign In</a>*/}
                <button className="btn btn-login">Sign In</button>
            </div>
        </form>
        <div className="signinform text-center">
            <h4>Don’t have an account?
                <Link to={"/auth/register"} className={`hover-a`}> Sign Up</Link>
            </h4>
        </div>
    </div>
    </>
}

export default LoginAuth;