import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

fetch('./data/products.json')
.then(resp => resp.json())
.then(({ products }) => {
  ReactDOM.render(<App products={ products } />, document.getElementById('root'));
});
