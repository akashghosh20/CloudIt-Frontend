import { useEffect, useState } from "react";
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const Reviews = () => {
    const loaderreviews = useLoaderData();
    const [reviews, setreviews] = useState(loaderreviews);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))
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
                fetch(`http://localhost:5000/delreviews/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The review has been deleted.",
                                icon: "success"
                            }).then(() => {
                                setreviews(reviews.filter(review => review._id !== _id));
                            });
                        }
                    })
                    .catch(error => console.error('Error deleting review:', error));
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
        const orderId = getTrimmedValue('orderId');
        const clientId = getTrimmedValue('clientId');
        const productId = getTrimmedValue('productId');
        const productCat = getTrimmedValue('productCat');
        const productName = getTrimmedValue('productName');
        const quantity = getTrimmedValue('quantity');
        const sellPrice = getTrimmedValue('sellPrice');
        const review = getTrimmedValue('review');
        const stars = getTrimmedValue('stars');
        const files = getTrimmedValue('files');
        const orderdate = getTrimmedValue('orderdate');

        const postData = {
         orderId,
         clientId,
         productId,
         productCat,
         productName,
         quantity,
         sellPrice,
         review,
         stars,
         files,
         orderdate
        };
        try {
            const response = await fetch('http://localhost:5000/addreviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            const data = await response.json();
            if (data.insertedId) {
                Swal.fire({
                    title: "New review Added!",
                    text: "You have successfully added a new review",
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
                                <span className="label-text">orderId</span>
                            </div>
                            <input name="orderId" className="input input-bordered" type="text" placeholder="orderId" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">clientId</span>
                            </div>
                            <input name="clientId" className="input input-bordered" type="text" placeholder="clientId" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">productId</span>
                            </div>
                            <input name="productId" className="input input-bordered" type="text" placeholder="productId" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text"> productCat</span>
                            </div>
                            <input name="productCat" className="input input-bordered" type="text" placeholder=" productCat" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">productName</span>
                            </div>
                            <input name="productName" className="input input-bordered" type="text" placeholder="productName" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">quantity</span>
                            </div>
                            <input name="quantity" className="input input-bordered" type="text" placeholder="quantity" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">files</span>
                            </div>
                            <input name="files" className="input input-bordered" type="text" placeholder="files" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">sellPrice</span>
                            </div>
                            <input name="sellPrice" className="input input-bordered" type="text" placeholder="sellPrice" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">review</span>
                            </div>
                            <input name="review" className="input input-bordered" type="text" placeholder="review" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">stars</span>
                            </div>
                            <input name="stars" className="input input-bordered" type="text" placeholder="stars" required />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">orderdate</span>
                            </div>
                            <input name="orderdate" className="input input-bordered" type="text" placeholder="orderdate" required />
                        </label>
                      
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-start gap-2">
                    <button type="submit" className="btn btn-wide">Add Reviews</button>
                </div>
            </form>
        </div>
        <div>
        <table className="table">
    <thead>
        <tr className="font-bold text-xl">
            <th className='text-lg text-center'>Order ID</th>
            <th className='text-lg text-center'>Client ID</th>
            <th className='text-lg text-center'>Product ID</th>
            <th className='text-lg text-center'>Product Category</th>
            <th className='text-lg text-center'>Product Name</th>
            <th className='text-lg text-center'>Quantity</th>
            <th className='text-lg text-center'>Sell Price</th>
            <th className='text-lg text-center'>Review</th>
            <th className='text-lg text-center'>Stars</th>
            <th className='text-lg text-center'>Files</th>
            <th className='text-lg text-center'>Order Date</th>
            <th className='text-lg text-center'>Actions</th>
        </tr>
    </thead>
    <tbody>
        {reviews.map(review => (
            <tr key={review._id}>
                <td className='text-center'>{review.orderId}</td>
                <td className='text-center'>{review.clientId}</td>
                <td className='text-center'>{review.productId}</td>
                <td className='text-center'>{review.productCat}</td>
                <td className='text-center'>{review.productName}</td>
                <td className='text-center'>{review.quantity}</td>
                <td className='text-center'>{review.sellPrice}</td>
                <td className='text-center'>{review.review}</td>
                <td className='text-center'>{review.stars}</td>
                <td className='text-center'>{review.files}</td>
                <td className='text-center'>{review.orderdate}</td>
                <td className='text-center'>
                    <button className="btn btn-xs btn-error">Pending</button>
                    <Link className="btn btn-xs bg-blue-300 text-black" to={`/update/${review._id}`}>Update</Link>
                    <button onClick={() => handleDelete(review._id)} className="btn btn-xs btn-error">Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
        </div>
    );
};

export default Reviews;