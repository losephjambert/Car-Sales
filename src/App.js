import React from 'react';

import CarContainer from './components/CarContainer';
import AdditionalFeaturesContainer from './components/AdditionalFeaturesContainer';

const App = () => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

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
