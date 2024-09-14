// ClientList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/client-ls');
        setClients(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h1>Client List</h1>
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
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
            <tr key={client._id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.country}</td>
              <td>{client.city}</td>
              <td>{client.phone}</td>
              <td>{client.packageBought}</td>
              <td>{client.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
