import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import CarSelectorContainer from './components/CarSelector';
import CarDetailsContainer from './components/CarDetails';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={CarSelectorContainer} />
      <Route path='/purchase' component={CarDetailsContainer} />
    </Switch>
  );
};

export default App;
