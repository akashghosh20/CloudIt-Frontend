import React from 'react';
import Swal from 'sweetalert2';

const AddPackages = () => {
    const categories = ['January', 'February', 'March', 'April'];

    const handleAddPost = async (event) => {
        event.preventDefault();
        const form = event.target;

        const getTrimmedValue = (name) => {
            const value = form[name]?.value;
            return value ? value.trim() : '';
        };

        const category = form.categories?.value; 
        const packageName = getTrimmedValue('packageName');
        const packagePrice = getTrimmedValue('packagePrice');
        const packageContents = Array.from({ length: 8 }, (_, i) => getTrimmedValue(`content${i + 1}`));
        const deliveryTime = getTrimmedValue('deliveryTime');
        const expressDeliveryTime = getTrimmedValue('expressDeliveryTime');
        const expressDeliveryPrice = getTrimmedValue('expressDeliveryPrice');
        const packageDetails = getTrimmedValue('packageDetails');
        const packageRequirements = getTrimmedValue('packageRequirements');

        const postData = {
            category,
            packageName,
            packagePrice,
            packageContents,
            deliveryTime,
            expressDeliveryTime,
            expressDeliveryPrice,
            packageDetails,
            packageRequirements
        };

        try {
            const response = await fetch('http://localhost:5000/addpackages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            const data = await response.json();

            if (data.insertedId) {
                Swal.fire({
                    title: "New Package Added!",
                    text: "You have successfully added a new package.",
                    icon: "success"
                });
                form.reset();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "There was an issue adding the package.",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Error adding package:', error);
            Swal.fire({
                title: "Error!",
                text: "An unexpected error occurred.",
                icon: "error"
            });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-around gap-5 p-5">
            <form onSubmit={handleAddPost} className="p-6 w-full mx-auto rounded-xl shadow-md flex flex-col gap-5">
                <div className="flex-1 flex flex-col justify-start gap-2">
                    <div className="flex flex-col gap-2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Package Category</span>
                            </div>
                            <select id="categories" name="categories" className="input input-bordered" required>
                                <option value="" disabled>Select Your Category</option>
                                {categories.map((month, index) => (
                                    <option key={index} value={month}>{month}</option>
                                ))}
                            </select>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Package Name</span>
                            </div>
                            <input name="packageName" className="input input-bordered" type="text" placeholder="Enter Your Package Name Here" required />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Package Price</span>
                            </div>
                            <input name="packagePrice" className="input input-bordered" type="text" placeholder="Enter Package Price Here" required />
                        </label>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Package Contents</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="flex flex-row items-center gap-5">
                                        <h1 className="text-2xl font-bold">{i + 1}</h1>
                                        <input name={`content${i + 1}`} className="input input-bordered" type="text" placeholder={`Content ${i + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </label>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-start gap-2">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Delivery Time</span>
                        </div>
                        <input name="deliveryTime" className="input input-bordered" type="text" placeholder="Enter Delivery Time Here" />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Express Delivery Time</span>
                        </div>
                        <input name="expressDeliveryTime" className="input input-bordered" type="text" placeholder="Enter Express Delivery Time Here" />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Express Delivery Price</span>
                        </div>
                        <input name="expressDeliveryPrice" className="input input-bordered" type="text" placeholder="Enter Express Delivery Price Here" />
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Package Details</span>
                        </div>
                        <textarea name="packageDetails" className="textarea textarea-bordered h-36" placeholder="Enter details"></textarea>
                    </label>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Package Requirements</span>
                        </div>
                        <textarea name="packageRequirements" className="textarea textarea-bordered h-36" placeholder="Enter requirements"></textarea>
                    </label>

                    <button type="submit" className="btn btn-wide">Add Package</button>
                </div>
            </form>
        </div>
    );
};

export default AddPackages;
