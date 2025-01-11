import React, { useState } from 'react';
import './Sign In.css'; // Import the CSS file for styling

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here (e.g., API call)
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email or Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>
            </form>
            <div className="footer">
                <p>Don't have an account? <a href="/">Sign Up</a></p>
            </div>
        </div>
    );
};

export default SignIn;