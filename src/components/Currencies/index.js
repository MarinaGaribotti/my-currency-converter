// imports npm
import React from 'react';
import Proptypes from 'prop-types';

// mes imports
import './style.scss';

// mon composant
const Currencies = () => (
  <div className="currencies">
    <div className="currencies-title">
      Currencies
    </div>
    <ul className="currencies-list">
      <li className="currency">Devise 1</li>
      <li className="currency">Devise 2</li>
      <li className="currency">Devise 3</li>
      <li className="currency">Devise 4</li>
      <li className="currency">Devise 5</li>
      <li className="currency">Devise 5</li>
    </ul>
  </div>

);

// export du composant pour qu'il soit accessible
export default Currencies;
