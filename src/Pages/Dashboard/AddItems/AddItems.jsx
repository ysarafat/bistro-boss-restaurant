/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const img_hosting_api = import.meta.env.VITE_IMAGEBB_API;
function AddItems() {
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_api}`;
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(`${img_hosting_url}`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((img) => {
                if (img.success) {
                    const imgURL = img.data.display_url;
                    const { name, price, recipe, category } = data;
                    const menuItem = {
                        name,
                        price: parseFloat(price),
                        category,
                        recipe,
                        image: imgURL,
                    };
                    axiosSecure.post('/menu', menuItem).then((data) => {
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Item added successfully',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    });
                }
            });
    };

    return (
        <div>
            <SectionTitle subTitle="What is new" title="add an item" />
            <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">
                            Recipe name<span className="text-red-500">*</span>{' '}
                        </span>
                    </label>
                    <input
                        type="text"
                        {...register('name', { required: true, maxLength: 120 })}
                        placeholder="Recipe Name"
                        className="input input-bordered w-full "
                    />
                </div>
                <div className="flex items-center flex-col lg:flex-row gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">
                                Category<span className="text-red-500">*</span>{' '}
                            </span>
                        </label>

                        <select
                            {...register('category', { required: true })}
                            className="select select-bordered"
                        >
                            <option disabled selected>
                                Select a category
                            </option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>max-w-xs
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">
                                Price<span className="text-red-500">*</span>{' '}
                            </span>
                        </label>
                        <input
                            {...register('price', { required: true })}
                            type="number"
                            placeholder="Type here"
                            className="input input-bordered w-full "
                        />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text-alt">Recipe Details</span>
                    </label>
                    <textarea
                        {...register('recipe', { required: true })}
                        className="textarea textarea-bordered h-24"
                        placeholder="Recipe Details"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text-alt">Upload image</span>
                    </label>
                    <input
                        {...register('image', { required: true })}
                        type="file"
                        className="file-input file-input-sm w-full max-w-xs"
                    />
                </div>
                <input
                    className="btn btn-md w-full bg-yellowOchre border-none mt-5"
                    type="submit"
                    value="Add Item"
                />
            </form>
        </div>
    );
}

export default AddItems;
