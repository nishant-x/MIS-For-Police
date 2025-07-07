import { useState, useEffect } from "react";
import "./PHQlogin.css";

const PHQLogin = () => {
  const [captcha, setCaptcha] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    enteredCaptcha: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Generate random captcha
  const generateCaptcha = () => {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomString = Array.from({ length: 5 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
    setCaptcha(randomString);
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
      // TODO: Add backend request here
      console.log("Form Submitted", formData);
      setErrorMessage(""); // Reset on success
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

              {/* Captcha UI */}
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
                <label htmlFor="captcha" />
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
                <a href="/forgot_phq">Forgot password?</a>
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

export default PHQLogin;
