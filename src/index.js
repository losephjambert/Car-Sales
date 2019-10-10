import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from './App';

// redux store
import store from './reducers';

// stlyes
import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  rootElement
);
