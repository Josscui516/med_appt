import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {

  const name = sessionStorage.getItem("name");
  const phone = sessionStorage.getItem("phone");
  const email = sessionStorage.getItem("email");

  return (
    <div className="profile-card">
        <h3>Your Profile</h3>

        <div className="profile-info">
            <p><b>Name:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
        </div>
    </div>
  );
};

export default ProfileCard;