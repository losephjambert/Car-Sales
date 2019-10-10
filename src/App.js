import React from 'react';

// components
import CarContainer from './components/CarContainer';
import AdditionalFeaturesContainer from './components/AdditionalFeaturesContainer';

const App = () => {
  return (
    <div className='boxes'>
      <CarContainer />
      <div className='box'>
        <AdditionalFeaturesContainer />
      </div>
    </div>
  );
};

export default App;
