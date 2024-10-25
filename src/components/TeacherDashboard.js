// src/components/TeacherDashboard.js
import React, { useState } from 'react';
import './TeacherDashboard.css'; // Import the new CSS file for styling

const TeacherDashboard = () => {
    const [formData, setFormData] = useState({
        fullName: '',
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
        highestQualification: '',
        specialization: '',
        university: '',
        yearOfGraduation: '',
        otherDegrees: '',
        yearsOfExperience: '',
        lastEmployer: '',
        subjectsTaught: '',
        classesTaught: '',
        modeOfTeaching: '',
        availability: '',
        primarySubjects: [],
        languagesKnown: [],
        otherSkills: '',
        preferredClasses: '',
        preferredTeachingMode: '',
        preferredAvailability: '',
        fees: '',
        certifications: '',
        uploadCertifications: null,
        resume: null,
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
            <h2 className="dashboard-title">Register yourself as a Tutor</h2>
            <p>Welcome to your dashboard!</p>
            <form className="dashboard-form" onSubmit={handleSubmit}>
                <h3>Personal Information</h3>
                <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
                <input type="date" name="dob" required onChange={handleChange} />
                <select name="gender" required onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" name="contactNumber" placeholder="Contact Number" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
                <input type="text" name="nationality" placeholder="Nationality" onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} />
                <input type="text" name="streetAddress" placeholder="Street Address" onChange={handleChange} />
                <input type="text" name="city" placeholder="City" onChange={handleChange} />
                <input type="text" name="state" placeholder="State" onChange={handleChange} />
                <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} />
                <input type="text" name="country" placeholder="Country" onChange={handleChange} />
                <input type="file" name="profilePicture" onChange={handleChange} />

                <h3>Academic Qualifications</h3>
                <input type="text" name="highestQualification" placeholder="Highest Qualification" required onChange={handleChange} />
                <input type="text" name="specialization" placeholder="Specialization/Major Subject" required onChange={handleChange} />
                <input type="text" name="university" placeholder="University/Institute Name" required onChange={handleChange} />
                <input type="text" name="yearOfGraduation" placeholder="Year of Graduation" required onChange={handleChange} />
                <input type="text" name="otherDegrees" placeholder="Other Degrees/Certifications" onChange={handleChange} />

                <h3>Professional Experience</h3>
                <input type="text" name="yearsOfExperience" placeholder="Years of Teaching Experience" required onChange={handleChange} />
                <input type="text" name="lastEmployer" placeholder="Current/Last Employer" required onChange={handleChange} />
                <input type="text" name="subjectsTaught" placeholder="Subjects Taught" required onChange={handleChange} />
                <input type="text" name="classesTaught" placeholder="Classes/Grades Taught" required onChange={handleChange} />
                <select name="modeOfTeaching" required onChange={handleChange}>
                    <option value="">Mode of Teaching</option>
                    <option value="offline">Offline</option>
                    <option value="online">Online</option>
                    <option value="both">Both</option>
                </select>
                <select name="availability" onChange={handleChange}>
                    <option value="">Availability</option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                </select>

                <h3>Skills & Expertise</h3>
                <select name="primarySubjects" multiple required onChange={handleChange}>
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="english">English</option>
                    {/* Add more subjects as needed */}
                </select>
                <input type="text" name="languagesKnown" placeholder="Languages Known" required onChange={handleChange} />
                <input type="text" name="otherSkills" placeholder="Other Skills" onChange={handleChange} />

                <h3>Teaching Preferences</h3>
                <input type="text" name="preferredClasses" placeholder="Preferred Classes/Grades" required onChange={handleChange} />
                <select name="preferredTeachingMode" onChange={handleChange}>
                    <option value="">Preferred Teaching Mode</option>
                    <option value="offline">Offline</option>
                    <option value="online">Online</option>
                </select>
                <select name="preferredAvailability" onChange={handleChange}>
                    <option value="">Preferred Availability</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>
                <input type="text" name="fees" placeholder="Fees (INR)" onChange={handleChange} />

                <h3>Certifications & Training</h3>
                <input type="text" name="certifications" placeholder="Any Relevant Certifications" onChange={handleChange} />
                <input type="file" name="uploadCertifications" onChange={handleChange} />

                <h3>Attachments</h3>
                <input type="file" name="resume" onChange={handleChange} />

                <button type="submit" className="dashboard-button">Register as Tutor</button>
            </form>
        </div>
    );
};

export default TeacherDashboard;
