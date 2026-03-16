import React, { useState } from "react";
import "./ReviewForm.css";

function ReviewForm() {

  const [showForm, setShowForm] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(null);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 0
  });

  const doctors = [
    { id: 1, name: "Dr. John Doe", speciality: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", speciality: "Dermatology" }
  ];

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRating = (ratingValue) => {
    setFormData({
      ...formData,
      rating: ratingValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.review || formData.rating === 0) {
      alert("Please fill all fields");
      return;
    }

    setSubmittedReview(formData);
    setReviewSubmitted(true);
    setShowForm(false);
  };

  return (
    <div className="review-container">

      <h2>Reviews</h2>

      <table className="review-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.speciality}</td>

              <td>
                <button
                  onClick={handleOpenForm}
                  disabled={reviewSubmitted}
                  className="review-btn"
                >
                  Click Here
                </button>
              </td>

              <td>{reviewSubmitted ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Review Form */}
      {showForm && (
        <div className="form-container">

          <h2>Give Your Review</h2>

          <form onSubmit={handleSubmit}>

            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Review:</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
            />

            <label>Rating:</label>

            <div className="stars">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(star)}
                  className={formData.rating >= star ? "star active" : "star"}
                >
                  ★
                </span>
              ))}
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>

          </form>

        </div>
      )}

      {/* Show submitted review */}
      {submittedReview && (
        <div className="submitted-review">

          <h3>Your Submitted Review</h3>

          <p><strong>Name:</strong> {submittedReview.name}</p>
          <p><strong>Review:</strong> {submittedReview.review}</p>
          <p><strong>Rating:</strong> {"★".repeat(submittedReview.rating)}</p>

        </div>
      )}

    </div>
  );
}

export default ReviewForm;