import PropTypes from 'prop-types';


const EmployeeData = ({data}) => {
    const {id, name, email, country, city, phone, skill,currentproject,lastactive, actions} = data;
    
    return (
      
          <tr> <td colSpan={7} className='p-1'>
        <div className="collapse collapse-arrow bg-base-200 ">
          <input type="radio" name="my-accordion-2" defaultChecked /> 
        <div className="collapse-title text-xl font-medium flex flex-row  items-center text-center">
      
            <p className='text-lg w-20'>#{id}</p>
            <p className='text-lg w-[200px]'>{name}</p>
            <p className='text-lg w-[300px]'>{email}</p>
            <p className='text-lg w-[300px]'>{skill}</p>
            <p className='text-lg w-[200px]'>{currentproject}</p>
            <p className='text-lg w-[100px]'>{lastactive}</p>
            <div className='ml-20'>
            <p className={`btn btn-sm ${actions==='Active'?'btn-success':'btn-warning'}`}>{actions}</p>
            <p className='btn btn-sm' >assign task</p>
            <p className='btn btn-sm'>pause</p>
            </div>
        
        </div>
        <div className="collapse-content flex flex-row justify-between items-center bg-blue-200"> 
       
        <p className='text-lg'><span className='font-bold'>country:</span> {country}</p>
            <p className='text-lg'><span className='font-bold'>city:</span> {city}</p>
            <p className='text-lg'><span className='font-bold'>phone:</span> {phone}</p>
            <p className='text-lg'><span className='font-bold'>password:</span> 46372</p>
          
           
      
        </div>
      </div>
    </td></tr>
    );
};

EmployeeData.propTypes = {

    data: PropTypes.object,
}

export default EmployeeData;