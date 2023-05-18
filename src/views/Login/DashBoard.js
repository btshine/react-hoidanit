import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            // Check if the user is authenticated
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('User not authenticated.');
                return;
            }

            try {
                // Make the API call to fetch the list of employees
                const response = await fetch('https://localhost:7269/api/Employees', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    // Retrieve the list of employees from the response
                    const data = await response.json();
                    setEmployees(data);
                } else {
                    console.error('Failed to fetch employees.');
                }
            } catch (error) {
                console.error('Error occurred while fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div>
            <h2>List of Employees</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.employeeId}>
                        <h3>{employee.empployeeName}</h3>
                        <p>Address: {employee.address}</p>
                        <p>City: {employee.city}</p>
                        <p>Country: {employee.country}</p>
                        <p>Skillsets: {employee.skillsets}</p>
                        <p>Phone: {employee.phone}</p>
                        <p>Email: {employee.email}</p>
                        <img src={employee.avatar} alt={employee.employeeName} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
