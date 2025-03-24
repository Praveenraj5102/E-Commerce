import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successfully")
      toast.success("Login Successfully")
      navigate("/home")
     
      
      
    } catch (error) {
      console.log(error);
      toast.error("Login Error")
    }

    
  };

  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleRegister}>
          <h2>Login</h2>

          <div className="mb-3">
            <label htmlFor="">
              Email
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="">
              Password
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Login</button>
          <p>
            Don't Have Account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
