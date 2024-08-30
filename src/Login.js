// src/Login.js
import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <img src="../component/IYUREK.png" alt="Logo" className="logo" />
                    <h2>Sign In</h2>
                </div>
                <div className="social-login">
                    <button className="social-button google">Google</button>
                    <button className="social-button facebook">Facebook</button>
                    <button className="social-button apple">Apple</button>
                </div>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
                <div className="signup-link">
                    <p>Don’t have an account? <a href="#">Sign Up</a></p>
                </div>
                <div className="privacy-policy">
                    <a href="#">Privacy Policy</a>
                </div>
                <footer>
                    <p>2024 © Iyurek</p>
                    <p>A product of Wall Street Business
                        Academy Holdings, Inc.All Rights Reserved</p>

                </footer>
            </div>
            <div className="close-button">✕</div>
        </div>
    );
};

export default Login;
