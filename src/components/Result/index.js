// imports npm
import React from 'react';
import PropTypes from 'prop-types';

// mes imports
import './style.scss';

// mon composant
const Result = ({ value, currency }) => (
  <div className="result">
    <p className="result-value">{value}</p>
    <p className="result-currency">{currency}</p>
  </div>
);

// mes proptypes
Result.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

// export du composant pour qu'il soit accessible
export default Result;
