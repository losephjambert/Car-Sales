import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddedFeatures from './AddedFeatures';

// will connect to the store to get dispatch and props
// will connect to car state

const CarContainer = ({ state }) => {
  return (
    <div className='box'>
      <Header car={state.car} />
      <AddedFeatures car={state.car} />
    </div>
  );
};

// now i need to use connect to map state and dispatch to props
const mapStateToProps = state => {
  console.log(state);
  return {};
};

// const mapDispatchToProps

export default connect(
  mapStateToProps,
  {}
)(CarContainer);
