import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddedFeatures from './AddedFeatures';

// will connect to the store to get dispatch and props
// will connect to car state

export default function CarContainer({ state }) {
  return (
    <div className='box'>
      <Header car={state.car} />
      <AddedFeatures car={state.car} />
    </div>
  );
}
