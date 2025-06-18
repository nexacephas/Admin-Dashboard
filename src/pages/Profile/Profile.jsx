import React, { useState } from 'react';
import './Profile.css';
import profile_img from '../../assets/My profile pic.jpg';

const Profile = () => {
  const [profilePic, setProfilePic] = useState(profile_img);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '',
    address: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = () => {
    alert('Password change submitted!');
  };

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="profile-top">
        <div className="profile-photo">
          <img src={profilePic} alt="Profile" />
          <label className="upload-btn">
            Change Photo
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
          </label>
        </div>

        <div className="profile-info">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />

          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
      </div>

      <div className="profile-bottom">
        <div className="preferences">
          <h4>Preferences</h4>
          <label>
            <input type="checkbox" /> Enable Notifications
          </label>
          <label>
            <input type="checkbox" /> Dark Mode
          </label>
        </div>

        <div className="change-password">
          <h4>Change Password</h4>
          <label>Current Password</label>
          <input type="password" placeholder="Current password" />
          <label>New Password</label>
          <input type="password" placeholder="New password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" />
          <button onClick={handlePasswordChange}>Update Password</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
