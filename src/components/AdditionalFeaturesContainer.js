import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

import { addFeature } from '../actions';

const AdditionalFeaturesContainer = ({ additionalFeatures, carPrice, additionalPrice, addFeature }) => {
  return (
    <div className='box'>
      <AdditionalFeatures additionalFeatures={additionalFeatures} addFeature={addFeature} />
      <Total carPrice={carPrice} additionalPrice={additionalPrice} />
    </div>
  );
};

const mapStateToProps = state => {
  const {
    additionalFeatures,
    car: { price, features },
    additionalPrice,
  } = state;
  return {
    additionalFeatures: [...additionalFeatures],
    carPrice: price,
    additionalPrice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFeature,
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeaturesContainer);
