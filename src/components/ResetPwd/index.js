import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const ResetPwd = () => {
  const [showPwd1, setShowPwd1] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [form, setForm] = useState({ pwd1: "", pwd2: "" });
  const [isFilled, setIsFilled] = useState(false);
  const location = useLocation();
  const email = location.state?.email || "";

  useEffect(() => {
    setIsFilled(form.pwd1.length > 0 && form.pwd2.length > 0);
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  );

  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2>Create New Password</h2>
        <p className="email-display">Reset password for: {email}</p>
        <form>
          <label>New Password</label>
          <div className="password-wrapper">
            <input
              type={showPwd1 ? "text" : "password"}
              name="pwd1"
              placeholder="Enter New Password"
              value={form.pwd1}
              onChange={handleChange}
              autoComplete="off"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPwd1((prev) => !prev)}
              aria-label="Toggle password visibility"
            >
              {showPwd1 ? <EyeOffIcon /> : <EyeIcon />}
            </span>
          </div>
          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input
              type={showPwd2 ? "text" : "password"}
              name="pwd2"
              placeholder="Re-Enter New Password"
              value={form.pwd2}
              onChange={handleChange}
              autoComplete="off"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPwd2((prev) => !prev)}
              aria-label="Toggle password visibility"
            >
              {showPwd2 ? <EyeOffIcon /> : <EyeIcon />}
            </span>
          </div>
          <button
            className={`reset-btn${isFilled ? " active" : ""}`}
            type="button"
            disabled={!isFilled}
          >
            Reset Password
          </button>
        </form>
        <div className="bottom-bar">
          Remember Password? <Link to="/">Login Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPwd;