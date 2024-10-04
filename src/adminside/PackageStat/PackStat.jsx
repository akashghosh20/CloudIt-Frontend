import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const PackStat = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        // Fetch all packages
        fetch('http://localhost:5000/packages')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => setPackages(data))
            .catch(error => {
                console.error('Error fetching packages:', error);
                Swal.fire("Error!", "Error fetching packages. Please try again.", "error");
            });
    }, []);

    // Handle delete functionality
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/packages/${id}`, {
                    method: 'DELETE'
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(() => {
                    setPackages(packages.filter(pack => pack._id !== id));
                    Swal.fire("Deleted!", "Package has been deleted.", "success");
                })
                .catch(error => {
                    console.error('Error deleting package:', error);
                    Swal.fire("Error!", "Error deleting package. Please try again.", "error");
                });
            }
        });
    };

    return (
        <div className="package-list-container">
            <h2>Package List</h2>
            <table className="package-list-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Package Name</th>
                        <th>Package Price</th>
                        <th>Delivery Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map(pack => (
                        <tr key={pack._id}>
                            <td>{pack.category}</td>
                            <td>{pack.packageName}</td>
                            <td>{pack.packagePrice}</td>
                            <td>{pack.deliveryTime}</td>
                            <td>
                                <Link to={`/update-package/${pack._id}`} className="edit-button">Edit</Link>
                                <button onClick={() => handleDelete(pack._id)} className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PackStat;
