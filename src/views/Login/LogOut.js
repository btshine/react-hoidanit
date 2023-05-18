import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
const Logout = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Clear the token from localStorage or state
        localStorage.removeItem('token');
        // Redirect the user to the login page or any other desired location
        history.push('/login');
        toast.success("Log out!")
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
