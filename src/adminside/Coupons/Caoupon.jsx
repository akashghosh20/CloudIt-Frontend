import { useEffect, useState } from "react";
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const Coupon = () => {
    const loadercoupons = useLoaderData();
    const [coupons, setcoupons] = useState(loadercoupons);
    useEffect(() => {
        fetch('http://localhost:5000/coupon')
            .then(res => res.json())
            .then(data => setcoupons(data))
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
                fetch(`http://localhost:5000/delcoupon/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The coupon has been deleted.",
                                icon: "success"
                            }).then(() => {
                                setcoupons(coupons.filter(coupon => coupon._id !== _id));
                            });
                        }
                    })
                    .catch(error => console.error('Error deleting coupon:', error));
            }
        });
    }
    
    const handleAddPost = async (event) => {
        event.preventDefault();
        const form = event.target;
        const getTrimmedValue = (name) => {
            const value = form[name]?.value;
            return value ? value.trim() : '';
        };
        const couponquestion = getTrimmedValue('couponquestion');
        const couponanswer = getTrimmedValue('couponanswer');
        const postData = {
            couponquestion,
            couponanswer,
        };
        try {
            const response = await fetch('http://localhost:5000/addcoupon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            const data = await response.json();
            if (data.insertedId) {
                Swal.fire({
                    title: "New couponage Added!",
                    text: "You have successfully added a new couponage",
                    icon: "success"
                });
                form.reset();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "There was an issue adding the post.",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Error adding post:', error);
            Swal.fire({
                title: "Error!",
                text: "An unexpected error occurred.",
                icon: "error"
            });
        }
    };
    return (
        <div className="flex flex-row">
        <div className="flex flex-col lg:flex-row justify-around gap-5 p-5">
            <form onSubmit={handleAddPost} className="p-6 w-full mx-auto rounded-xl shadow-md flex flex-col gap-5">
                <div className="flex-1 flex flex-col justify-start gap-2">
                    <div className="flex flex-col gap-2">
                
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Question</span>
                            </div>
                            <input name="couponquestion" className="input input-bordered" type="text" placeholder="coupon question" required />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Answer</span>
                            </div>
                            <input name="couponanswer" className="input input-bordered" type="text" placeholder="coupon answer" required />
                        </label>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-start gap-2">
                    <button type="submit" className="btn btn-wide">Add Question</button>
                </div>
            </form>
        </div>
        <div>
        <table className="table">
            <thead>
                <tr className="font-bold text-xl flex flex-row justify-between">
                    <td className='text-lg text-center'>Question</td>
                    <td className='text-lg  text-center'>Answer</td>
                    <td className='text-lg  text-center'>Action</td>
                </tr>
            </thead>
            <tbody>
                {coupons.map(coupon => (
                       <tr key={coupon._id}>
                      <td><p className='text-lg text-center'>{coupon.couponquestion}</p></td> 
                      <td><p className='text-lg text-center'>{coupon.couponanswer}</p></td> 
                      <td>  
                        <button  className="btn btn-xs btn-error">Pending</button><Link className="btn btn-xs bg-blue-300 text-black" to={`/update/${coupon._id}`}>Update</Link><button onClick={() => handleDelete(coupon._id)} className="z-50 btn btn-xs btn-error">Delete</button> </td> 
     </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default Coupon;