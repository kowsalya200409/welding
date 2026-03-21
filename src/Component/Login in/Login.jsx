import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="login-container">

      <div className="login-box">

        <h2>{isRegister ? "Register" : "Login"}</h2>

        <form>
          {isRegister && (
            <input type="text" placeholder="Full Name" required />
          )}

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          {isRegister && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          <button type="submit">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </p>

      </div>

    </div>
  );
}

export default Login;