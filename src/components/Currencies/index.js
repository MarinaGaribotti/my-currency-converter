// imports npm
import React from 'react';
import PropTypes from 'prop-types';

// mes imports
import './style.scss';

// mon composant
const Currencies = ({ currenciesList }) => (
  <div className="currencies">
    <div className="currencies-title">
      Currencies
    </div>
    <ul className="currencies-list">
      {
        currenciesList.map((currencyObject) => (
          <li key={currencyObject.name} className="currency">
            {currencyObject.name}
          </li>
        ))
      }
    </ul>
  </div>
);

// mes proptypes
Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,

};

// export du composant pour qu'il soit accessible
export default Currencies;
