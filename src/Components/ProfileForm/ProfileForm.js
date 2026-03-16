import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileForm.css";

const ProfileForm = () => {

  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");

    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }

  }, [navigate]);

  const fetchUserProfile = async () => {

    const authtoken = sessionStorage.getItem("auth-token");
    const email = sessionStorage.getItem("email");

    const response = await fetch(`${API_URL}/api/auth/user`, {
      headers: {
        Authorization: `Bearer ${authtoken}`,
        Email: email
      }
    });

    const user = await response.json();

    setUserDetails(user);
    setUpdatedDetails(user);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const authtoken = sessionStorage.getItem("auth-token");
    const email = sessionStorage.getItem("email");

    await fetch(`${API_URL}/api/auth/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authtoken}`,
        "Content-Type": "application/json",
        Email: email
      },
      body: JSON.stringify(updatedDetails)
    });

    sessionStorage.setItem("name", updatedDetails.name);
    sessionStorage.setItem("phone", updatedDetails.phone);

    setUserDetails(updatedDetails);
    setEditMode(false);

    alert("Profile Updated Successfully!");
  };

  return (

    <div className="profile-container">

      {editMode ? (

        <form onSubmit={handleSubmit}>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={userDetails.email}
              disabled
            />
          </label>

          <label>
            Name
            <input
              type="text"
              name="name"
              value={updatedDetails.name}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Phone
            <input
              type="text"
              name="phone"
              value={updatedDetails.phone}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Save</button>

        </form>

      ) : (

        <div className="profile-details">

          <h1>Welcome, {userDetails.name}</h1>

          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>

          <button onClick={handleEdit}>Edit</button>

        </div>

      )}

    </div>
  );
};

export default ProfileForm;