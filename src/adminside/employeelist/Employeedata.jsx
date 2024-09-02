import PropTypes from 'prop-types';
import React from 'react';

const EmployeeData = ({ data }) => {
  const { id, name, email, skill, currentproject, country, city, phone, actions } = data;

  return (
    <tr>
      <td colSpan={7} className='p-1'>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium flex flex-row items-center text-center">
            <p className='text-lg w-20'>#{id}</p>
            <p className='text-lg w-[200px]'>{name}</p>
            <p className='text-lg w-[300px]'>{email}</p>
            <p className='text-lg w-[200px]'>{skill}</p>
            <p className='text-lg w-[200px]'>{currentproject}</p>
            <div className='ml-20'>
              <p className={`btn btn-sm ${actions === 'Active' ? 'btn-success' : 'btn-warning'}`}>{actions}</p>
              <p className='btn btn-sm'>Assign Task</p>
              <p className='btn btn-sm'>Pause</p>
            </div>
          </div>
          <div className="collapse-content flex flex-row justify-between items-center bg-blue-200">
            <p className='text-lg'><span className='font-bold'>Country:</span> {country}</p>
            <p className='text-lg'><span className='font-bold'>City:</span> {city}</p>
            <p className='text-lg'><span className='font-bold'>Phone:</span> {phone}</p>
          </div>
        </div>
      </td>
    </tr>
  );
};

EmployeeData.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    currentproject: PropTypes.string.isRequired,
    country: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
    actions: PropTypes.string,
  }).isRequired,
};

export default EmployeeData;
