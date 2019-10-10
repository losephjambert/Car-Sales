import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddedFeatures from './AddedFeatures';

import { removeFeature } from '../actions';

const CarContainer = ({ features, image, name, price, test, removeFeature }) => {
  return (
    <div className='box'>
      <Header image={image} name={name} price={price} />
      <AddedFeatures features={features} test={test} removeFeature={removeFeature} />
    </div>
  );
};

const mapStateToProps = state => {
  const { car } = state;
  return {
    ...car,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    test: () => dispatch({ type: 'TEST' }),
  };
};

export default connect(
  mapStateToProps,
  { removeFeature }
)(CarContainer);
