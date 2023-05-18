import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleUsernameChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // Create a login request object
        const loginRequest = {
            email,
            password,
        };

        try {
            // Make the API call to the login endpoint
            const response = await fetch('https://localhost:7269/api/WphAuthentication/CheckCredentials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginRequest),
            });

            if (response.ok) {
                // Successful login, retrieve the JWT token from the response
                const data = await response.json();
                const token = data.token;
                // Store the token in localStorage or state for future use
                localStorage.setItem('token', token);
                // Redirect the user to the Dashboard component
                history.push('/dashboard');
            } else {
                // Handle login error
                toast.error("Login failed!")
                console.error('Login failed.');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                Email:
                <input type="text" value={email} onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
