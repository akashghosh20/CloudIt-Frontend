import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EmployeeModal from './EmployeeModal'; // Import the modal component
import EmployeeData from "./Employeedata";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchEmployees = () => {
    axios.get('http://localhost:5000/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching employees:', error));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <button className="btn btn-primary mb-4" onClick={() => setShowModal(true)}>+ Add Employee</button>
      <table className="table">
        <thead>
          <tr className="font-bold text-xl ">
            <td colSpan={7}>
              <div className="flex flex-row justify-between items-center text-center">
                <p className="w-[80px]">ID</p>
                <p className="w-[200px]">Name</p>
                <p className="w-[300px]">Email</p>
                <p className="w-[200px]">Skill</p>
                <p className="w-[200px]">Current Project</p>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
  {employees.map(employee => (
    <EmployeeData key={employee.id} data={employee} />
  ))}
</tbody>

      </table>
      <EmployeeModal showModal={showModal} setShowModal={setShowModal} fetchEmployees={fetchEmployees} />
    </div>
  );
};

export default EmployeeList;
