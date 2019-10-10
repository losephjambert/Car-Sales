import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddedFeatures from './AddedFeatures';

const CarContainer = ({ features, image, name, price, test }) => {
  return (
    <div className='box'>
      <Header image={image} name={name} price={price} />
      <AddedFeatures features={features} test={test} />
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
  mapDispatchToProps
)(CarContainer);
