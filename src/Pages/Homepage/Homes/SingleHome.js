import Rating from '@mui/material/Rating/Rating';
import React from 'react';

const SingleHome = ({ home }) => {
  const { city, image, price, review, title } = home;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className=''>
        <img src={image} className='w-full h-[256px]' alt="homes" />
      </figure>
      <div className="card-body">
        <Rating
          name="half-rating-read"
          value={Number(review)}
          precision={0.5}
          readOnly
        />
        <p className='font-semibold'>{city}</p>
        <h2 className="card-title ">{title}</h2>
        <button className='bg-purple-500 w-16 py-1 font-bold text-white rounded-l-2xl text-lg rounded-r'>${price}</button>

      </div>
    </div>
  );
};

export default SingleHome;
