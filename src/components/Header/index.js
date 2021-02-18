// imports npm
import React from 'react';
import Proptypes from 'prop-types';

// mes imports
import './style.scss';

// mon composant
const Header = () => (
  <div className="header">
    <h1 className="header-title">Converter</h1>
    <p className="header-amount">1 euro</p>
  </div>
);

// export du composant pour qu'il soit accessible
export default Header;
