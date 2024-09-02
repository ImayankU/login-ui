import React from "react";
import "./Login.css";
import googleImg from "./assets/google.png";
import facebookImg from "./assets/facebook.png";
import appleImg from "./assets/apple.png";
import logoImg from "./assets/IYUREK.png";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <img src={logoImg} alt="Logo" className="logo" />
                    <h2>Sign In</h2>
                </div>
                <div className="social-login">
                    <img src={googleImg} alt="Google Login" className="social-button google" />
                    <img src={facebookImg} alt="Facebook Login" className="social-button facebook" />
                    <img src={appleImg} alt="Apple Login" className="social-button apple" />
                </div>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="" />
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
                    <p>A product of Wall Street Business Academy Holdings, Inc.
                        <br />
                        All Rights Reserved</p>
                </footer>
            </div>
            <div className="close-button">✕</div>
        </div>
    );
};

export default Login;
