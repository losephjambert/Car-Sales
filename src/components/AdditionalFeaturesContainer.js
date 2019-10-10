import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

const AdditionalFeaturesContainer = ({ additionalFeatures, carPrice, additionalPrice }) => {
  return (
    <div className='box'>
      <AdditionalFeatures additionalFeatures={additionalFeatures} />
      <Total carPrice={carPrice} additionalPrice={additionalPrice} />
    </div>
  );
};

const mapStateToProps = state => {
  const {
    additionalFeatures,
    car: { price },
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
    test: () => dispatch({ type: 'TEST' }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdditionalFeaturesContainer);
