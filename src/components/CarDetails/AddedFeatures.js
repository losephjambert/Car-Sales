import React from 'react';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className='content'>
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type='1'>
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} onClick={props.test} removeFeature={props.removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
