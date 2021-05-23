import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

const title = 'React 17, Webpack 5, Material UI 4 Boilerplate';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
