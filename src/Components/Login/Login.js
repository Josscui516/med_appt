import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {

    const [formData, setFormData] = useState({
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

        if (!formData.email) {
            temp.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            temp.email = "Invalid email format";
        }

        if (!formData.password) {
            temp.password = "Password is required";
        }

        setErrors(temp);

        return Object.keys(temp).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Login successful!");
        }
    };

    return (
        <div className="container">

            <div className="login-grid">

                <div className="login-text">
                    <h2>Login</h2>
                </div>

                <div className="login-text">
                    Are you a new member?{" "}
                    <span>
                        <Link to="/signup" style={{ color: "#2190FF" }}>
                            Sign Up Here
                        </Link>
                    </span>
                </div>

                <br />

                <div className="login-form">

                    <form onSubmit={handleSubmit}>

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
                                Login
                            </button>

                            <button
                                type="reset"
                                className="btn btn-danger mb-2"
                            >
                                Reset
                            </button>

                        </div>

                        <br />

                        <div className="login-text">
                            Forgot Password?
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Login;