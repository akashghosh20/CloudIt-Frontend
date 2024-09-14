import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
  // State to store employee data
  const [employees, setEmployees] = useState([]);

  // Fetch employees data from the API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/employees')  // Adjust this URL to your actual API endpoint
      .then(response => {
        // Log response to check if it's an array or object
        console.log(response.data);
        // Set employees data (if response contains a nested employees array, adjust the path)
        setEmployees(response.data);
      })
      .catch(error => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      {Array.isArray(employees) && employees.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>City</th>
              <th>Phone</th>
              <th>Skill</th>
              <th>Last Active</th>
              <th>Current Project</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.country}</td>
                <td>{employee.city}</td>
                <td>{employee.phone}</td>
                <td>{employee.skill}</td>
                <td>{employee.lastActive}</td>
                <td>{employee.currentProject}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found or data loading...</p>
      )}
    </div>
  );
};

export default EmployeeList;
