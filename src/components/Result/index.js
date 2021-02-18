// imports npm
import React from 'react';
import Proptypes from 'prop-types';

// mes imports
import './style.scss';

// mon composant
const Result = () => (
  <div className="result">
    <p className="result-value">1.09</p>
    <p className="result-currency">United States Dollar</p>
  </div>
);

// export du composant pour qu'il soit accessible
export default Result;
