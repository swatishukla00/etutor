import React, { useState } from 'react';
import './TeacherDashboard.css'; // Import the same CSS file for styling

const StudentDashboard = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        contactNumber: '',
        email: '',
        nationality: '',
        address: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        profilePicture: null,
        academicLevel: '',
        preferredSubjects: [],
        parentFirstName: '',
        parentLastName: '',
        parentContactNumber: '',
        schoolName: '',
        class: '',
        section: '',
        place: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else if (Array.isArray(formData[name])) {
            const newValues = [...formData[name]];
            if (newValues.includes(value)) {
                newValues.splice(newValues.indexOf(value), 1);
            } else {
                newValues.push(value);
            }
            setFormData({ ...formData, [name]: newValues });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);
        // Handle form submission logic here
    };

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Student Dashboard</h2>
            <p>Welcome to your dashboard!</p>
            <form className="dashboard-form" onSubmit={handleSubmit}>
                <h3>Personal Information</h3>
                <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
                <input type="date" name="dob" required onChange={handleChange} />
                <select name="gender" required onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" name="contactNumber" placeholder="Contact Number (optional)" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
                <input type="text" name="nationality" placeholder="Nationality" onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} />
                <input type="text" name="streetAddress" placeholder="Street Address" onChange={handleChange} />
                <input type="text" name="city" placeholder="City" onChange={handleChange} />
                <input type="text" name="state" placeholder="State" onChange={handleChange} />
                <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} />
                <input type="text" name="country" placeholder="Country" onChange={handleChange} />
                <input type="file" name="profilePicture" onChange={handleChange} />

                <h3>Profile Setup</h3>
                <input type="text" name="academicLevel" placeholder="Academic Level / Grade" required onChange={handleChange} />
                <select name="preferredSubjects" multiple required onChange={handleChange}>
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="english">English</option>
                    {/* Add more subjects as needed */}
                </select>

                <h3>Parents Information</h3>
                <input type="text" name="parentFirstName" placeholder="Parent's First Name" required onChange={handleChange} />
                <input type="text" name="parentLastName" placeholder="Parent's Last Name" required onChange={handleChange} />
                <input type="text" name="parentContactNumber" placeholder="Parent's Contact Number" onChange={handleChange} />

                <h3>Student School Details</h3>
                <input type="text" name="schoolName" placeholder="School Name" required onChange={handleChange} />
                <input type="text" name="class" placeholder="Class" required onChange={handleChange} />
                <input type="text" name="section" placeholder="Section" required onChange={handleChange} />
                <input type="text" name="place" placeholder="Place" required onChange={handleChange} />

                <button type="submit" className="dashboard-button">Submit</button>
            </form>
        </div>
    );
};

export default StudentDashboard;