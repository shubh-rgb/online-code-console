// src/pages/UserProfileForm.js
import React, { useState } from 'react';
import '../styles/UserProfileForm.css';
import { db } from '../firebase'; // assuming you've exported db from firebase.js
import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

const handleChange = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const user = auth.currentUser;
    await setDoc(doc(db, 'users', user.uid), formData);
    alert('Profile saved successfully');
  } catch (error) {
    console.error('Error saving profile:', error);
  }
};

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    profession: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔄 Send to backend or Firebase
    console.log('Form submitted:', formData);
    alert('Profile saved successfully!');
  };

  return (
    <div className="user-profile-form">
      <h2>User Profile Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" required value={formData.name} onChange={handleChange} />
        </label>
        <label>Email:
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </label>
        <label>Phone:
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
        </label>
        <label>Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </label>
        <label>Profession:
          <input type="text" name="professio" value={formData.profession} onChange={handleChange} />
        </label>
        <label>Experience (in years):
          <input type="number" name="experience" min="0" max="50" value={formData.experience} onChange={handleChange} />
        </label>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UserProfileForm;
