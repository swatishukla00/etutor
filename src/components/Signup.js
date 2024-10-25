import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './TeacherDashboard.css';

const Signup = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
        contactNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
    });
    const [error, setError] = useState('');
    const [role, setRole] = useState(''); // State to hold the selected role

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setError('Invalid email format');
            return;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        // Handle signup logic here
        console.log('Registering:', formData);
        setError('');
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        if (selectedRole === 'tutor') {
            navigate('/teacher-dashboard'); // Redirect to Teacher Dashboard
        } else if (selectedRole === 'student') {
            navigate('/student-dashboard'); // Redirect to Student Dashboard
        }
    };

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Signup</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="dashboard-form">
                <input type="text" name="firstName" className="dashboard-input" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" className="dashboard-input" placeholder="Last Name" onChange={handleChange} required />
                <input type="email" name="email" className="dashboard-input" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" className="dashboard-input" placeholder="Password" onChange={handleChange} required />
                <input type="date" name="dob" className="dashboard-input" onChange={handleChange} required />
                <select name="gender" className="dashboard-input" onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" name="contactNumber" className="dashboard-input" placeholder="Contact Number (optional)" onChange={handleChange} />
                <input type="text" name="address" className="dashboard-input" placeholder="Street Address" onChange={handleChange} required />
                <input type="text" name="city" className="dashboard-input" placeholder="City" onChange={handleChange} required />
                <input type="text" name="state" className="dashboard-input" placeholder="State" onChange={handleChange} required />
                <input type="text" name="zipCode" className="dashboard-input" placeholder="Zip Code" onChange={handleChange} required />
                <input type="text" name="country" className="dashboard-input" placeholder="Country" onChange={handleChange} required />
                <button type="submit" className="dashboard-button">Register</button>
            </form>
            <div className="user-type-container"> {/* Added container for role selection */}
                <button className="user-type-button" onClick={() => handleRoleSelection('tutor')}>I am a Tutor</button>
                <button className="user-type-button" onClick={() => handleRoleSelection('student')}>I am a Student</button>
            </div>
        </div>
    );
};

export default Signup;
