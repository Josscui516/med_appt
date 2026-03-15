import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const navigate = useNavigate();

    const register = async (e) => {

        e.preventDefault();

        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
            }),
        });

        const json = await response.json();
        console.log("SERVER RESPONSE:", json);

        if (json.authtoken) {

            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            navigate("/");
            window.location.reload();

        } 
        else {

            if (json.errors && json.errors.length > 0) {
                setShowerr(json.errors[0].msg);
            } 
            else if (json.error) {
                setShowerr(typeof json.error === "string" ? json.error : json.error.msg);
            } 
            else {
                setShowerr("Registration failed");
            }

        }
    };

    return (

        <div className="container" style={{marginTop:'5%'}}>

            <div className="signup-grid">

                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>

                <div className="signup-text1">
                    Already a member? 
                    <Link to="/login"> Login</Link>
                </div>

                <div className="signup-form">

                    <form method="POST" onSubmit={register}>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                className="form-control"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                            />
                        </div>

                        {showerr && <div className="err" style={{color:'red'}}>{showerr}</div>}

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Sign_Up;