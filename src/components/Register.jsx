import { useState } from "react";
import './Register.css'
import { Link, useNavigate} from "react-router-dom";
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const navigate=useNavigate() 

  const handleRegister = async (e) => {
    e.preventDefault()
    try{
       await createUserWithEmailAndPassword(auth,email,password)
        toast.success("Account Created  Successfully")
        navigate("/login")
    }
    catch(error){
        console.log(error)
        toast.warn("This email was Already used")
    }

  };

  return (
    <>
      <div className="signup-container">
        <form  className="signup-form" onSubmit={handleRegister}>
          <h2>Sign Up</h2>

          <div className="mb-3">
            <label htmlFor="">
              First Name
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="">
              Last Name
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </label>
          </div>
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
          <button type="submit">Sign Up</button>
          <p>
            Already Registered? <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
