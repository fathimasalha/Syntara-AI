import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const DEFAULT_EMAIL = "salha@gmail.com";
const DEFAULT_PASSWORD = "Salha@123";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);
 

  useEffect(() => {
    setIsFormFilled(email.length > 0 && password.length > 0);
  }, [email, password]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      alert("Login Successful!");
      setEmail("");
      setPassword("");
    } else {
      alert("Login Failed");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <div className="part">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <label>Email ID</label>
            <input
              type="email"
              placeholder="eg:yourname@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
                title={showPassword ? "Hide Password" : "Show Password"}
              >
                {showPassword ? (
                  // Alternative closed eye icon
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.94 17.94A10.05 10.05 0 0112 19c-5.523 0-10-4.03-10-7 0-1.306.835-2.417 2.22-3.293m3.1-1.6A9.956 9.956 0 0112 5c5.523 0 10 4.03 10 7 0 1.306-.835 2.417-2.22 3.293M3 3l18 18" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.88 9.88a3 3 0 104.24 4.24" />
                  </svg>
                ) : (
                  // Show password icon (open eye)
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </span>
            </div>
            <div className="forgot">
              <Link to="/forgot-password">Forgot Password ?</Link>
            </div>
            <button 
              className={`login-btn ${isFormFilled ? 'active' : ''}`} 
              type="submit"
            >
              Login
            </button>
            <div className="or-divider">
              <span>or</span>
            </div>
            <button className="google-btn" type="button">
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google"
              />
              Continue with Google
            </button>
          </form>
          <div className="bottom-bar">
            NewTo Syntara Ai? <Link to="/signup">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 