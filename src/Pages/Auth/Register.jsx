import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if(email){
        console.log("berhasil login")
        localStorage.setItem("username", email);
        navigate("/auth/login");
    }

    return <>
        <div className="login-userset">
            <div className="login-logo">
                <img src="/assets/img/logo.png" alt="img"/>
            </div>
            <div className="login-userheading">
                <h3>Create an Account</h3>
                <h4>Continue where you left off</h4>
            </div>
            <div className="form-login">
                <label>Full Name</label>
                <div className="form-addons">
                    <input type="text" value={name} onChange={(e)=>{
                        setName(e.target.value);
                    }} placeholder="Enter your full name"/>
                    <img src="/assets/img/icons/users1.svg" alt="img"/>
                </div>
            </div>
            <div className="form-login">
                <label>Email</label>
                <div className="form-addons">
                    <input onChange={(e)=>{
                        setEmail(e.target.value);
                    }} type="text" placeholder="Enter your email address"/>
                    <img src="/assets/img/icons/mail.svg" alt="img"/>
                </div>
            </div>
            <div className="form-login">
                <label>Password</label>
                <div className="pass-group">
                    <input type="password" className="pass-input" placeholder="Enter your password"/>
                    <span className="fas toggle-password fa-eye-slash"></span>
                </div>
            </div>
            <div className="form-login">
                <a className="btn btn-login">Sign Up</a>
            </div>
            <div className="signinform text-center">
                <h4>Already a user?
                <Link to={"/auth/login"} className={`hover-a`}> Sign In</Link>

                </h4>

            </div>
        </div>
    </>
}

export default RegisterPage;