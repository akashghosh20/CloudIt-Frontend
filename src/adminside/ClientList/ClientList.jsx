import React, { useEffect, useState } from 'react';
import ClientData from './ClientData';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('http://localhost:5000/client-ls');
                const data = await response.json();
                console.log(data); // Check if the data is an array
                setClients(data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };
    
        fetchClients();
    }, []);
    

    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Package Bought</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {clients.map(client => (
                    <ClientData key={client._id} data={client} />
                ))}
            </tbody>
        </table>
    );
};

export default ClientList;
