import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign_Up.css";

function Sign_up() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let temp = {};

        if (!formData.name) temp.name = "Name is required";

        if (!formData.phone) {
            temp.phone = "Phone number is required";
        }
        else if (!/^\d{10}$/.test(formData.phone)) {
            temp.phone = "Phone number must be exactly 10 digits";
        }

        if (!formData.email) {
            temp.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            temp.email = "Invalid email format";
        }

        if (!formData.password) {
            temp.password = "Password is required";
        } else if (formData.password.length < 6) {
            temp.password = "Password must be at least 6 characters";
        }

        setErrors(temp);

        return Object.keys(temp).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Signup Successful");
        }
    };

    return (
        <div className="container" style={{ marginTop: "5%" }}>

            <div className="signup-grid">

                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>

                <div className="signup-text1" style={{ textAlign: "left" }}>
                    Already a member?
                    <span>
                        <Link to="/login" style={{ color: "#2190FF" }}> Login</Link>
                    </span>
                </div>

                <div className="signup-form">

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>

                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                onChange={handleChange}
                            />

                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>


                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>

                            <input
                                type="tel"
                                name="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                            />

                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>


                        <div className="form-group">
                            <label htmlFor="email">Email</label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                onChange={handleChange}
                            />

                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>


                        <div className="form-group">
                            <label htmlFor="password">Password</label>

                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter your password"
                                onChange={handleChange}
                            />

                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>


                        <div className="btn-group">

                            <button
                                type="submit"
                                className="btn btn-primary mb-2 mr-1"
                            >
                                Submit
                            </button>

                            <button
                                type="reset"
                                className="btn btn-danger mb-2"
                            >
                                Reset
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Sign_up;