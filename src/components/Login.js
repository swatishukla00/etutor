import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css'; // Import the new CSS file for styling
import logo from '../assets/images/logo.png'; // Adjust the path as necessary

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userType, setUserType] = useState(null); // State to track user type
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        // Handle login logic here
        console.log('Logging in with:', { email, password });
        setError('');
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleUserTypeSelection = (type) => {
        setUserType(type);
        if (type === 'signup') {
            navigate('/signup'); // Navigate to Teacher Dashboard
        }
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Adhyayan Logo" className="logo" width="162" height="50" />
            <h2 className="login-title">Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login-input"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="forgot-password">
                <a href="#" onClick={() => alert('Forgot password functionality to be implemented.')}>
                    Forgot Password?
                </a>
            </p>
            <div className="user-type-container">
                <p>New User?</p>
                <button onClick={() => handleUserTypeSelection('signup')} className="user-type-button">Click here to Register</button>
            </div>
        </div>
    );
};

export default Login;
