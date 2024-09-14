import React, { useEffect, useState } from 'react';

// AdminTable component to display each admin row
const AdminTable = ({ data }) => {
    return (
        <tr>
            <td>{data.adminId}</td>
            <td>{data.adminName}</td>
            <td>{data.email}</td>
            <td>{data.role}</td>
        </tr>
    );
};

const AdminList = () => {
    const [admins, setAdmins] = useState([]);

    // Fetch the admins data when the component loads
    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await fetch('http://localhost:5000/admin/admin-ls');
                const data = await response.json();
                setAdmins(data);
            } catch (error) {
                console.error('Error fetching admins:', error);
            }
        };

        fetchAdmins();
    }, []);

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4">Admin List</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Admin ID</th>
                        <th>Admin Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <AdminTable key={admin.adminId} data={admin} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminList;
