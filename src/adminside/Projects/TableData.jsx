import React from 'react';

const TableData = ({ data }) => {
    return (
        <tr>
            <td>{data.clientId}</td>
            <td>{data.clientName}</td>
            <td>{data.category}</td>
            <td>{data.packagename}</td>
            <td>{data.price}</td>
            <td>{data.progress}%</td>
            <td>{data.time}</td>
            <td>
                {data.action.map((action, index) => (
                    <button key={index} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">
                        {action}
                    </button>
                ))}
            </td>
        </tr>
    );
};

export default TableData;
