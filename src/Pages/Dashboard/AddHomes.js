import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddedItem.css';

const AddHomes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageStorageKey = `388f337a52c44783cb0cce0087f5fc67`;
  const API_URL = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

  const onSubmit = async (e) => {
    const image = e.image[0];
    const formData = new FormData();
    formData.append('image', image);

    const { data } = await axios.post(API_URL, formData).catch((error) => {
      toast.error(error);
    });

    if (data.success) {
      const img = data.data.url;
      const postHomes = {
        city: e.city,
        title: e.title,
        price: e.price,
        review: e.review,
        image: img,
      };

      await axios
        .post('http://localhost:5000/homes', postHomes)
        .then((res) => {
          if (res.data.success) {
            toast.success('Added Successfully');
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
    reset();
  };

  return (
    <div className="flex items-center h-screen justify-center">
      <form className="md:w-[400px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center mb-12 text-5xl font-bold">Homes</h1>
        <input
          className="py-3 px-6 outline-none border-0 shadow-inner bg-gray-100 w-full rounded my-2"
          type="text"
          placeholder="City"
          {...register('city', {
            required: {
              value: true,
              message: 'City is required!',
            },
          })}
        />

        <br />

        <input
          type="text"
          className="py-3 px-6 outline-none border-0 shadow-inner bg-gray-100 w-full rounded my-2"
          placeholder="Title"
          {...register('title', {
            required: {
              value: true,
              message: 'Title is required!',
            },
          })}
        />

        <br />

        <input
          type="number"
          className="py-3 px-6 outline-none border-0 shadow-inner bg-gray-100 w-full rounded my-2"
          placeholder="Price per person"
          {...register('price', {
            required: {
              value: true,
              message: 'Price is required!',
            },
          })}
        />

        <br />

        <input
          type="number"
          className="py-3 px-6 outline-none border-0 shadow-inner bg-gray-100 w-full rounded my-2"
          placeholder="Review"
          {...register('review', {
            required: {
              value: true,
              message: 'Review is required!',
            },
          })}
        />

        <br />

        <input
          type="file"
          className="py-3 px-6 outline-none border-0 shadow-inner bg-gray-100 w-full rounded my-2"
          {...register('image', {
            required: {
              value: true,
              message: 'Image is required!',
            },
          })}
        />
        <input
          className="text-center w-full my-4 py-3 bg-gradient-to-t from-green-400 to-lime-500 text-xl text-white rounded"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddHomes;
