import axios from 'axios';
import React, { useState } from 'react';

const EmployeeModal = ({ showModal, setShowModal, fetchEmployees }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skill, setSkill] = useState('');
  const [currentProject, setCurrentProject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/addemployee', {
        name,
        email,
        skill,
        currentproject: currentProject
      });
      fetchEmployees(); // Refresh the employee list
      setShowModal(false); // Close the modal
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Skill</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Current Project</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={currentProject}
              onChange={(e) => setCurrentProject(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
