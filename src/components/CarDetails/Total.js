import React from 'react';

const Total = ({ carPrice, additionalPrice }) => {
  return (
    <div className='content'>
      <h4>Total Amount: ${carPrice + additionalPrice}</h4>
    </div>
  );
};

export default Total;
