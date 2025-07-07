import { useState, useEffect } from "react";
import "./StationLgin.css";

const StationLogin = () => {
  const [captcha, setCaptcha] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    enteredCaptcha: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Generate new captcha
  const generateCaptcha = () => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const newCaptcha = Array.from({ length: 5 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
    setCaptcha(newCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.enteredCaptcha !== captcha) {
      setErrorMessage("Invalid captcha");
    } else {
      // TODO: Connect this with backend API
      console.log("Login attempt", formData);
      setErrorMessage(""); // Clear error if no captcha issue
    }
  };

  return (
    <div>
      <nav className="header">
        <p className="portal_name">MP Police Central Command</p>
        <img src="/3logo3.png" alt="logo" />
      </nav>

      <section className="main_login">
        <div className="container">
          <div className="login_div leftdiv">
            <img src="/3logo3.png" alt="logo" />
            <h3>Welcome to MP Police Central Command</h3>
            <h1>Ministry of Home Affairs</h1>
          </div>

          <div className="login_div rightdiv">
            <h2>Sign in to your account</h2>
            <h4>Please enter your credentials below</h4>

            {errorMessage && (
              <div className="error-message">
                <span style={{ color: "red" }}>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="captcha">
                <input type="text" value={captcha} disabled />
                <button
                  type="button"
                  className="refresh_button"
                  onClick={generateCaptcha}
                >
                  🔄
                </button>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="captcha"
                  name="enteredCaptcha"
                  placeholder="Enter Captcha"
                  required
                  value={formData.enteredCaptcha}
                  onChange={handleChange}
                />
              </div>

              <h6>
                <a href="/forgot_station">Forgot password?</a>
              </h6>

              <button type="submit">SIGN IN</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2024 Ministry of Home Affairs, Madhya Pradesh. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default StationLogin;
