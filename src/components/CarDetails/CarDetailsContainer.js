import React from 'react';
import CarContainer from './CarContainer';
import AdditionalFeaturesContainer from './AdditionalFeaturesContainer';

const CarDetailsContainer = () => {
  return (
    <div className='boxes'>
      <CarContainer />
      <AdditionalFeaturesContainer />
    </div>
  );
};

export default CarDetailsContainer;
