import React, { useEffect, useState } from 'react';
import TableData from './TableData';

const ProjectsTable = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/projects');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Client ID</th>
                        <th>Client Name</th>
                        <th>Category</th>
                        <th>Package</th>
                        <th>Price</th>
                        <th>Progress</th>
                        <th>Time Left</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <TableData key={project._id} data={project} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectsTable;