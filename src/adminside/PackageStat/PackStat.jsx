import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const PackStat = () => {
    useEffect(() => {
        document.title = "All My Classes";
    }, []);

    const loaderpacks = useLoaderData();
    const [packs, setpacks] = useState(loaderpacks);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setpacks(data))
            .catch(error => console.error('Error fetching classes:', error));
    }, []);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delpackage/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The pack has been deleted.",
                                icon: "success"
                            }).then(() => {
                                // Remove the deleted pack from the state
                                setpacks(packs.filter(pack => pack._id !== _id));
                            });
                        }
                    })
                    .catch(error => console.error('Error deleting pack:', error));
            }
        });
    }

    return (
        <table className="table">
            <thead>
                <tr className="font-bold text-xl flex flex-row justify-between">
                    
                    <th className='text-lg text-center'>Category</th>
                    <th className='text-lg  text-center'>Name</th>
                    <th className='text-lg  text-center'>Price</th>
                    <th className='text-lg  text-center'>Delivery</th>
                    <th className='text-lg  text-center'>Ex.Delivery</th>
                    <th className='text-lg  text-center'>Ex.Price</th>
                    <th className='text-lg  text-center'>clicks</th>
                    <th className='text-lg  text-center'>sold</th>
                    <th className='text-lg  text-center'>status</th>
                    <th className='text-lg  text-center mr-16'>Action</th>

                </tr>
            </thead>
            <tbody>
                {packs.map(pack => (
                       <tr key={pack._id}> <td colSpan={11}>
                       <div className="collapse collapse-arrow bg-base-200 ">
                         <input type="radio" name="my-accordion-2" defaultChecked /> 
                       <div className="collapse-title flex flex-row justify-between font-bold">
                        
                        <p className='text-lg text-center'>{pack.category}</p>
                        <p className='text-lg text-center'>{pack.packageName}</p>
                        <p className='text-lg text-center'>{pack.packagePrice}</p>
                        <p className='text-lg text-center'>{pack.deliveryTime}</p>
                        <p className='text-lg  text-center'>{pack.expressDeliveryTime}</p>
                        <p className='text-lg  text-center'>{pack.expressDeliveryPrice}</p>
                        <p className='text-lg text-center'>{pack.clicks}</p>
                        <p className='text-lg  text-center'>{pack.totalsold}</p>
                        <p className='text-lg  text-center'>   <button  className="btn btn-xs btn-error">A</button><button  className="btn btn-xs btn-error">P</button></p>
                        <div className=''>
                        <Link className="btn btn-xs bg-blue-300 text-black" to={`/update/${pack._id}`}>U</Link>
                        <button onClick={() => handleDelete(pack._id)} className="btn btn-xs btn-error">D</button>
            </div>  </div>
            <div className="collapse-content flex flex-row justify-between items-center bg-blue-50"> 

                        <p>
                            <ul>
                                {(pack.packageContents && Array.isArray(pack.packageContents) ? pack.packageContents : []).map((content, index) => (
                                    <li key={index}>{content}</li>
                                ))}
                            </ul>
                        </p>
                        <p>{pack.packageDetails}</p>
                        <p>{pack.packageRequirements}</p>

                        </div>
      </div>
    </td></tr>
                ))}
            </tbody>
        </table>
    );
};

export default PackStat;
