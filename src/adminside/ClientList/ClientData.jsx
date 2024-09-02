import PropTypes from 'prop-types';


const ClientData = ({data}) => {
    const {id, name, email, country, city, phone, packageBought, actions} = data;
    
    return (
        <tr>
            <td className='text-lg'>#{id}</td>
            <td className='text-lg'>{name}</td>
            <td className='text-lg'>{email}</td>
            <td className='text-lg'>{country}</td>
            <td className='text-lg'>{city}</td>
            <td className='text-lg'>{phone}</td>
            <td className='text-lg'>{packageBought}</td>
            <td className={`btn ${actions==='Active'?'btn-success':'btn-warning'}`}>{actions}</td>
        </tr>
    );
};

ClientData.propTypes = {

    data: PropTypes.object,
}

export default ClientData;