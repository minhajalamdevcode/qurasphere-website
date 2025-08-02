// components/Card.jsx
import React from 'react';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="w-64">
      <img src={image} alt={title} className="rounded-t-lg" />
      <div className="bg-gray-200 rounded-b-lg">
        <h5 className="px-3 py-1 text-2xl font-medium">{title}</h5>
        <p className="px-3 py-2 font-normal">{description}</p>
        <a href={link} className="px-3 pb-6 block font-normal text-blue-500">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
