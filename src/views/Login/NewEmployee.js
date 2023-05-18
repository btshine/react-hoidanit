import React, { useState } from 'react';

const NewEmployee = () => {
    const [employee, setEmployee] = useState({
        empployeeName: '',
        address: '',
        city: '',
        country: '',
        skillsets: '',
        phone: '',
        email: '',
        avatar: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleCreateEmployee = async (e) => {
        e.preventDefault();

        // Check if the user is authenticated
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('User not authenticated.');
            return;
        }

        try {
            // Make the API call to create a new employee
            const response = await fetch('https://localhost:7269/api/Employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(employee),
            });

            if (response.ok) {
                // Employee created successfully
                console.log('New employee created.');
                // Reset the form fields
                setEmployee({
                    empployeeName: '',
                    address: '',
                    city: '',
                    country: '',
                    skillsets: '',
                    phone: '',
                    email: '',
                    avatar: '',
                });
            } else {
                console.error('Failed to create new employee.');
            }
        } catch (error) {
            console.error('Error occurred while creating a new employee:', error);
        }
    };

    return (
        <div>
            <h2>Create New Employee</h2>
            <form onSubmit={handleCreateEmployee}>
                <label>
                    Employee Name:
                    <input type="text" name="empployeeName" value={employee.empployeeName} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" value={employee.address} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    City:
                    <input type="text" name="city" value={employee.city} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Country:
                    <input type="text" name="country" value={employee.country} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Skillsets:
                    <input type="text" name="skillsets" value={employee.skillsets} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="text" name="phone" value={employee.phone} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="email" value={employee.email} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Avatar:
                    <input type="text" name="avatar" value={employee.avatar} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Create Employee</button>
            </form>
        </div>
    );
};

export default NewEmployee;
