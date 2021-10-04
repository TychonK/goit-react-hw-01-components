import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Profile from './components/Profile/Profile';

ReactDOM.render(
  <Fragment>
    <Profile />
  </Fragment>,
  document.getElementById('root')
);