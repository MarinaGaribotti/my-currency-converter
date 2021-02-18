// imports npm
import React from 'react';
import PropTypes from 'prop-types';

// mes imports
import './style.scss';

// mon composant
const Header = ({ baseAmount }) => (
  <div className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">{baseAmount} euro</p>
  </div>
);

// mes proptypes
Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

// export du composant pour qu'il soit accessible
export default Header;
