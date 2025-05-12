import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const ForgotPwd = () => {
  const [email, setEmail] = useState("salha@gmail.com");
  const [isFilled, setIsFilled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFilled(email.length > 0);
  }, [email]);

  const handleReset = () => {
    if (isFilled) {
      navigate("/reset-password", { state: { email } });
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <form>
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            placeholder="eg: yourname@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
          />
          <button
            onClick={handleReset}
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

export default ForgotPwd;